import Rx from 'rxjs'

import './radio.scss'

// template
function Radio (p) {
  const { value, className = '', name, text, ...props } = p || {}
  return (
    <div className={`${className}`}>
      <label>
        <input type="radio" value={value} name={name} {...props} />
        {text}
      </label>
    </div>
  )
}

export default Radio
