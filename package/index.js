

// 导入组件，组件必须声明 name
import Extable from '../src/components/ExTable'
import ExTableColumn from '../src/components/ExTableColumn.js'

let outout = {
  install(Vue){
    Vue.component(ExTableColumn.name, ExTableColumn)
    // Vue.use(VueClipboard)
    Vue.component(Extable.name, Extable)
  }
}

export default outout
