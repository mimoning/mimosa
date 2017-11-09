import button from './button'
import input from './input'

const pages = {
  button,
  input,
}

export default function (sources) {
  // 获取路由状态数据流
  const States$ = sources.States$
  // 构成新的虚拟 dom 流
  const vdom$ = States$
    // 此处要求页面对应的字段和路由状态名相同
    .map(({name}) => pages[name](sources).DOM)
    // 展平流，把高阶 Observable 展平成低阶 Observable
    .switch()
  
  return {
    DOM: vdom$
  }
}
