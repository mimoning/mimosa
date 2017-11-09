import Rx from 'rxjs'

import './input.scss'

function Input (p) {
  const { value, className, ...props } = p || {}
  return (
    <div className={`ms-input-box ${className || ''}`}>
      <input className="ms-input" value={value} {...props}/>
    </div>
  )
}

function intent(domSource) {
  const props$ = domSource.props || Rx.Observable.of({});

  const value$ = domSource.DOM.select('.ms-input')
    .events('input')
    .map(e => e.target.value)

  return {
    props$,
    value$
  }
}

function model(actions) {
  return actions.props$
  .map(props => actions.value$
    .map(value =>
      Object.assign({}, props, { value })
    )
    .startWith(props)
  )
  .switch()
}

function view(states$) {
  return states$
  .map(({value, ...props}) =>
    <Input value={value} {...props} />
  )
}

function InputComponent (sources) {
  const actions = intent(sources)

  const states$ = model(actions)

  const vdom$ = view(states$)

  return {
    DOM: vdom$,
    value: states$.map(v => v.value)
  }
}

export default InputComponent
