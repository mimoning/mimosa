import Rx from 'rxjs'

import { RadioComponent } from '#'

function createSource(sources, props) {
  return {
    DOM: sources.DOM,
    props: Rx.Observable.of(props),
    value: Rx.Observable.of('1')
  }
}

function radio (sources) {
  const normalRadio = createSource(sources, [{
    value: '1',
    name: 'number',
    text: '11111',
  }, {
    value: '2',
    disabled: true,
    name: 'number',
    text: '22222',
  }, {
    value: '3',
    name: 'number',
    text: '33333',
  }])

  const normalRadioComponent = RadioComponent(normalRadio)

  const vdom$ = Rx.Observable.combineLatest(
    normalRadioComponent.value,
    normalRadioComponent.DOM
  ).map(([v, radio]) =>
    <div>
      <h3>normal radio</h3>
      {radio}
      <div>
        {v} is checked
      </div>
    </div>
  )

  return {
    DOM: vdom$
  }
}

export default radio
