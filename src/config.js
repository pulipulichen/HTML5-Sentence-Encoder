let config = {
  appName: 'PWA-English-Speaking-Practice',
  debug: {
    enableRestore: true,
//    SpeechToTextUtils: {
//      mockup: true  // true false auto
//    }
  },
  viewportSize: {
  },
  loading: false,
  inited: false,
  
}

import styleConfig from './styles/style.config.js'
config.styleConfig = styleConfig

//import readingConfig from './../config/reading.js'
//config.readingConfig = readingConfig

import productionConfig from './config.production.js'
if (process.env.NODE_ENV === 'production') {
  for (let name in productionConfig) {
    config[name] = productionConfig[name]
  }
}

export default config