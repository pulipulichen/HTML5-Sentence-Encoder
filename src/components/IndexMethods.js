
//import IndexMethodsLocalStorage from './IndexMethodsLocalStorage.js'
//import IndexMethodsDictionary from './IndexMethodsDictionary.js'

export default function (Index) {
  Index.methods.startToLoadDemo = async function (path) {
    if (!path) {
      return ''
    }
    
    return await this.utils.AxiosUtils.get(path)
  }
}