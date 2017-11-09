import './input.scss'

function Input (p, children) {
  const { value, ...props } = p || {}
  return (
    <div className="ms-input-box">
      <input className="ms-input" value={value} {...props}/>
    </div>
  )
}

export default Input
