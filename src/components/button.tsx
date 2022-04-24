// Import Types
import { ButtonProps } from '../types'
// Import Helpers
import classMerge from '../utils/classMerge'

//* ============================
//* == Button ==================
//* ============================
const Button = ({ className, variant = 'text', size = 'md', color = 'primary', ...rest }: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const classes = classMerge(className, 'button', variant && `button--${variant}`, size && `button--${size}`, color && `button--${color}`)

  return <button className={classes} {...rest} />
}

export default Button
