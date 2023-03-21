import {Fluence} from '@fluencelabs/fluence'
import {krasnodar} from '@fluencelabs/fluence-network-environment'

import {
    joinGame,
    requestPlayers,
    playGame
} from '../generated/Cribbage';

(async (HUB_PEER_ID: any) => {

    await Fluence.start({
        connectTo: krasnodar[0]
    })
    
    const res = await joinGame(HUB_PEER_ID);
    
    setInterval(async () => {
        const res2 = await requestPlayers(HUB_PEER_ID)
        console.log(res2)
    }, 2000)

    setTimeout(async () => {
        const res3 = await playGame(HUB_PEER_ID)
        console.log(res3)
    }, 5000)

})("12D3KooWLvfbJrjUWsNAR31scsZiJDoJgr6WBhxCQE1AV6zFBKhj");