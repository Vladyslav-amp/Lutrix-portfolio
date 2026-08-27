import './Button.scss';
export default function Button({
  as: Component = 'button',
  variant = 'main',
  className = '',
  children,
  ...props
}) {
  const classes = ['button', `button--${variant}`, className].filter(Boolean).join(' ');
  return <Component className={classes} {...props}>
      <span className="button__content">{children}</span>
      <span className="button__glow" aria-hidden="true" />
    </Component>;
}
