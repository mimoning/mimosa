import Rx from 'rxjs'

import './radio.scss'

// template
function Radio (p) {
  const { value, className = '', name, text, ...props } = p || {}
  return (
    <div className={`ms-radio-box ${props.disabled ? 'disabled' : ''} ${className}`}>
      <label>
        <input className="ms-radio" type="radio" value={value} name={name} {...props} />
        {text}
      </label>
    </div>
  )
}

function intent(domSource) {
  const props$ = domSource.props || Rx.Observable.of([]);

  const value$ = domSource.value
    .concat(domSource.DOM
      .select('.ms-radio')
      .events('change')
      .map(e => e.target.value)
    );
  
  return {
    props$,
    value$
  }
}

function model(actions) {
  return actions.props$
    .combineLatest(actions.value$)
    .map(
      ([props, value]) =>
        props.map(p => Object.assign({}, p, { checked: p.value === value}))
    )
}

function view(states$) {
  return states$
    .map(props =>
      props.map(p => <Radio {...p}/>)
    )
}

function RadioComponent(sources) {
  const actions = intent(sources);

  const states$ = model(actions);

  const vdom$ = view(states$);

  return {
    DOM: vdom$,
    value: states$
      .map(props => {
        const checkedRadio = props.filter(p => p.checked)[0]
        return checkedRadio ? checkedRadio.value : undefined
      })
  }
}

export default RadioComponent
