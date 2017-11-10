function Link(p, children) {
  const { href, router, className, ...props } = p || {}
  if (!href) {
    throw new Error('The "href" property is necessary')
  }
  return (
    <a href={router.buildUrl(href)}
      className={`${router.isActive(href) ? 'active' : ''}${className ? ' ' + className : ''}`}
      {...props}>
      {children}
    </a>
  )
}

export default Link
