import RLP from 'rlp'
(() => {
    const nestedList = [[1,2], [[2,3]], [[2,3], [[2]]]]
    const encoded = RLP.encode(nestedList)
    console.log(encoded)
    const decoded = RLP.decode(encoded)
})()

