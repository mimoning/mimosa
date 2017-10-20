import Rx from 'rxjs'

import Link from '../router/link'

function Nav (sources) {
  const Router = sources.Router
  const States$ = sources.States$

  const vdom$ = States$.concatMap(() => Rx.Observable.of(
    <div>
      <Link href="button" router={Router}>Button</Link>
    </div>
  ))

  return {
    DOM: vdom$
  }
}

export default Nav
