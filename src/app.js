import { createApp } from 'vue'
// import Taro from "@tarojs/taro";
import './app.scss'
import {store} from  './store/index.js'
import {setLocalStorage} from './config/globel'

const App = createApp({
  onShow (options) {
    setLocalStorage('active',0);
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
  
})

App.use(store)


App.config.globalProperties.$filters = {
  moneyFormate(value) {
    return "¥"+Number(value).toFixed(2)
  }
}



export default App
