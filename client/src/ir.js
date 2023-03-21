const library = require('./talis.js')
const ir = (peerId) => {
    let spirit = []
    const rad = 13
    let total = 0
    if(peerId){
      for(let i = 0; i < peerId.length + 1; i++) {
        if(i % rad || i == 0) {
          total += peerId.charCodeAt(i)
        } else {
          spirit.push(library[total % 256])
          total = 0
        }
      }
      return `${spirit[0]}-${spirit[1]}-${spirit[2]}-${spirit[3]}`
    }else return null
  }

 module.exports = ir