export default function (Index) {
  Index.watch = {
    loadDemo: async function () {
      if (this.loadDemo === 'none') {
        return false
      }
      
      this.InputRawText = await this.startToLoadDemo(this.loadDemo)
      
      this.loadDemo = 'none'
    }
//    recognitionAbort() {
//      if (this.recognitionAbort === true) {
//        this.recognition.abort()
//      }
//    },
//    'localConfig.voiceName' () {
//      let pos = this.voiceNameList.indexOf(this.localConfig.voiceName)
//      if (pos === -1) {
//        pos = 0
//      }
//      this.voice = this.voices[pos]
//    }
  }
}