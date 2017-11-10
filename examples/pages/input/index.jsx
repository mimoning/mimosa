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

  const bboInput = createSource(domSource, {kind: 'bbo', placeholder: 'some text', ...baseProps})

  const disabledBboInput = createSource(domSource, {kind: 'bbo', placeholder: 'some text', disabled: true, ...baseProps})
  return {
    normalInput, disabledInput, bboInput, disabledBboInput
  }
}

function model(actions) {
  const {
    normalInput,
    disabledInput,
    bboInput,
    disabledBboInput
  } = actions

  const normalInputComponent = isolate(InputComponent)(normalInput)
  const disabledInputComponent = isolate(InputComponent)(disabledInput)
  const bboInputComponent = isolate(InputComponent)(bboInput)
  const disabledBboInputComponent = isolate(InputComponent)(disabledBboInput)

  return Rx.Observable
    .combineLatest(
      normalInputComponent.value,
      disabledInputComponent.value,
      bboInputComponent.value,
      disabledBboInputComponent.value,
      normalInputComponent.DOM,
      disabledInputComponent.DOM,
      bboInputComponent.DOM,
      disabledBboInputComponent.DOM
    )
}

function view(states$) {
  return states$
    .map(([v, v2, v3, v4, input, input2, input3, input4]) =>
      <div>
        <h3>normal input</h3>
        {input} Input text: {v}
        <h3>disabled input</h3>
        {input2} Input2 text: {v2}
        <h3>border bottom only input</h3>
        {input3} Input3 text: {v3}
        <h3>disabled border bottom only input</h3>
        {input4} Input4 text: {v4}
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
