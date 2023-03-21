import {Fluence} from '@fluencelabs/fluence'
import {krasnodar} from '@fluencelabs/fluence-network-environment'

import {
    registerWaitingRoom
} from '../generated/Cribbage';

const Corestore = require("corestore");
const Hyperbee = require('hyperbee');

(async () => {
    await Fluence.start({
        connectTo: krasnodar[1]
    })
    const corestore = new Corestore('./db')
    const peers = corestore.get({name: "peers", valueEncoding: 'json'})

    const db = new Hyperbee(peers, {
        keyEncoding: 'utf-8',
        valueEncoding: 'json'
    })

    registerWaitingRoom({
        join: async (peer_id: any) => {
            console.log('joining', peer_id)
            db.put(peer_id, true)
            // await peers.append({peer_id: peer_id, playing: false})
            return true
        },
        request: async () => {
            const fullStream = db.createReadStream()
            const waitingPlayers: any = []

            for await (const { key, value } of db.createReadStream()) {
                console.log(key, value)
                waitingPlayers.push({peer_id: key, playing: false})
            }

            if(waitingPlayers.length > 4)
                return waitingPlayers.slice(0,4)
            else 
                return waitingPlayers
        },
        play: async (peer_id: any) => {
            await db.del(peer_id)
            return true;
        }
    })
    console.log('connected', Fluence.getStatus().peerId)
})()