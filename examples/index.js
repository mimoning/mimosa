import Rx from 'rxjs'
import { run } from '@cycle/rxjs-run'
import { h, makeDOMDriver } from '@cycle/dom'

// 引入路由相关组件
import createRouter from './router/driver'
import routes from './router/routes'

// 引入 layout
import Nav from './layout/nav'
import Content from './layout/content'

function main (sources) {
  // 导航栏
  const nav$ = Nav(sources).DOM
  // 内容部分
  const content$ = Content(sources).DOM
  // 完整的页面 dom 流
  const vtree$ = nav$
    .combineLatest(content$)
    .map(([nav, content]) =>
      <div>
        {nav}
        {content}
      </div>
    )

  const sinks = {
    DOM: vtree$
  }
  return sinks
}

// 配置开始的路由
const startRoute = 'button'
// 创建并启动路由
const router = createRouter(routes, startRoute)

const drivers = {
  DOM: makeDOMDriver('#root'),
  Router: () => router.Router,
  States$: () => router.States$
}

run(main, drivers)
