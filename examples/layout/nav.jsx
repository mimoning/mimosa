import Rx from 'rxjs'

import Link from '../router/link'
import './nav.scss'

function Nav (sources) {
  const Router = sources.Router
  const States$ = sources.States$

  const vdom$ = States$.concatMap(() => Rx.Observable.of(
    <div>
      <Link className="nav" href="button" router={Router}>Button</Link>
      <Link className="nav" href="input" router={Router}>Input</Link>
      <Link className="nav" href="radio" router={Router}>Radio</Link>
    </div>
  ))

  return {
    DOM: vdom$
  }
}

export default Nav
