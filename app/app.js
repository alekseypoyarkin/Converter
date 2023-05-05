import Vue from 'nativescript-vue'

import Home from './components/Home'

Vue.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown)
new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
