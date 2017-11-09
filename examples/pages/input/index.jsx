import Rx from 'rxjs'

import{ Input } from '#'

export default function (sources) {
  return {
    DOM: Rx.Observable.of(
      <div>
        <h3>normal input</h3>
        <Input placeholder="Test text"/>
      </div>
    )
  }
}
