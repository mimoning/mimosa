import Rx from 'rxjs'
import isolate from '@cycle/isolate'

import { InputComponent } from '#'

function createSource(sources, props) {
  return {
    DOM: sources.DOM,
    props: Rx.Observable.of(props)
  }
}

function intent(domSource) {
  const baseProps = {
    value: 'some text'
  }

  const normalInput = createSource(domSource, baseProps)

  const disabledInput = createSource(domSource, {disabled: true, ...baseProps})

  return {
    normalInput, disabledInput
  }
}

function model(actions) {
  const {
    normalInput,
    disabledInput
  } = actions

  const normalInputComponent = isolate(InputComponent)(normalInput)
  const disabledInputComponent = isolate(InputComponent)(disabledInput)

  return Rx.Observable
    .combineLatest(
      normalInputComponent.value,
      disabledInputComponent.value,
      normalInputComponent.DOM,
      disabledInputComponent.DOM
    )
}

function view(states$) {
  return states$
    .map(([v, v2, input, input2]) =>
      <div>
        <h3>normal input</h3>
        {input} Input text: {v} <br/><br/>
        <h3>disabled input</h3>
        {input2} Input2 text: {v2}
      </div>
    )
}

export default function (sources) {

  const actions = intent(sources)

  const states$ = model(actions)

  const vdom$ = view(states$)

  return {
    DOM: vdom$
  }
}
