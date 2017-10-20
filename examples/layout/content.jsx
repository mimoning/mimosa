import Rx from 'rxjs'

import matchRoute from '../pages'

function Content (sources) {
  const Router = sources.Router
  const States$ = sources.States$
  // 适配路由得到当前页面
  const pages$ = matchRoute(sources).DOM

  const vdom$ = pages$
    .map(page =>
      <div>
        <hr/>
        <div>
          {page}
        </div>
      </div>
    )

  return {
    DOM: vdom$
  }
}

export default Content
