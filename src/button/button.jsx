import './button.scss'

function Button(p, children) {
  const { type = 'ghost', size = 'nm', ...props } = p || {}
  // 按钮的 size class
  const btnSize = (size === 'sm' ? 'sm' : '')

  return (
    <button className={`ms-btn ${btnSize} ${type}`} {...props}>
      {children}
    </button>
  )
}

export default Button
