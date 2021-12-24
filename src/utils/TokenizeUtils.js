
import PuliPostMessageAPI from './puli-post-message-api/puli-post-message-api.js'
let inited = false
let api

let url = 'https://pulipulichen.github.io/jieba-js/'
if (location.href.startsWith('http://localhost:8383/')) {
  url = 'http://localhost:8383/jieba-js/index.html'
}

export default {
  cache: {},
  generateKey (text) {
    if (Array.isArray(text)) {
      text = JSON.stringify(text)
    }
    return 'token-' + text
  },
  tokenize: async function (text) {
    
    this.init()
    let key = generateKey(text)
    if (this.cache[key]) {
      return this.cache[key]
    }
    
    let isArray = false
    if (Array.isArray(text)) {
      text = text.join('\n')
      isArray = true
    }
    
    //console.log(data)
    let data = {
      data: text
    }
    
    
    let result = await api.send(url, data, {debug: false})
    
    if (isArray === true) {
      result = result.split('\n')
    }
    
    this.cache[key] = result
    return result
  },
  init () {
    if (inited === true) {
      return true
    }
    
    api = PuliPostMessageAPI()
    inited = true
  }
}