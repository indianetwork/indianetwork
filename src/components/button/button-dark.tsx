import React from 'react'
import { Link } from 'gatsby'

interface Props {
  path: string
  label: string
  primary: boolean
}

const ButtonDark: React.FC<Props> = ({ path, label, primary }: Props) => {
  return (
    <Link className="link-main" to={path}>
    	<button className="btn btn-sm btn-outline-dark contact-us-btn no-border-radius btn-black">
    		<strong>{label}</strong>
    	</button>
    </Link>
  )
}

export default ButtonDark
