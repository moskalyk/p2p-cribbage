# cribbage

As a background process:

Bundler -> Get timestamps in relation to alt-pool to submit transactions
Alt-Pool -> Get timestamps in relation to UserOperation

Alt-Pool (runs in browser) -> In browser: Register on Hub (write to smart contract using sequence relayer), get connected peers, get first 4 by timestamp, exchange keys with neighbour peerExchange, create hyperbee with hyperswarm-web, send pool from top timestamp of neighbourhood, write updates to peer list

Bundler software (runs from cli) connecting to an alt-pool, connect to smart contract, get peerId from ERC721 metadata using sequence indexer, get timestamps -> get key from closest peer, pull UserOperations into hyperbee, sort and get By highest priority

UserOperation (browser) -> get ping from alt-pool (browsers), get highest, write UserOperation, then alt-pool replicates to sub-net
