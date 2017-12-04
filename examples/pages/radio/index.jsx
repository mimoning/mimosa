import Rx from 'rxjs'

import { RadioComponent } from '#'

function createSource(sources, props) {
  return {
    DOM: sources.DOM,
    props: Rx.Observable.of(props)
  }
}

function radio (sources) {
  const vdom$ = RadioComponent

  return {
    DOM: Rx.Observable.of(
      <div>
        <RadioComponent value="1" name="number" text="11111"></RadioComponent>
        <RadioComponent disabled="true" value="2" name="number" text="22222"></RadioComponent>
        <RadioComponent value="3" name="number" text="33333"></RadioComponent>
      </div>
    )
  }
}

export default radio
