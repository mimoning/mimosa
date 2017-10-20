import Rx from 'rxjs'
import { createRouter } from 'router5'
import listenersPlugin from 'router5/plugins/listeners'
import browserPlugin from 'router5/plugins/browser'

export default function (routes, startWith) {
  // 创建路由
  const Router = createRouter(routes, {
    defaultRoute: startWith
  })
  .usePlugin(browserPlugin({
    useHash: true
  }))
  .usePlugin(listenersPlugin())

  // 创建路由状态数据流
  const States$ = new Rx.BehaviorSubject().filter(v => !!v)
  // 监听路由变化，并及时更新数据流
  Router.addListener(state => {
    States$.next(state)
  })

  // 启动路由
  console.log('%cRouter Activated', 'color: green')
  Router.start()

  return {
    Router,
    States$
  }
}
