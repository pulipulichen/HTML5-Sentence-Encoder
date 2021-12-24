import PuliPostMessageAPI from './puli-post-message-api/puli-post-message-api.js'
let inited = false
let api

let url = 'https://pulipulichen.github.io/HTML-Simple-Classifier/index.html?api=1'
if (location.href.startsWith('http://localhost:8383/')) {
  url = 'http://localhost:8383/HTML-Simple-Classifier/index.html?api=1'
}

export default {
  openClassifier: async function (rawData, config = {}) {
    
    this.init()
    
    //console.log(data)
    let data = {
      rawData,
      config
    }
    
    api.send(url, data, {
      mode: 'popup',
      newWindow: true,
      features: 0.8
    })
  },
  init () {
    if (inited === true) {
      return true
    }
    
    api = PuliPostMessageAPI()
    inited = true
  }
}