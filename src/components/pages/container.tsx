import React, { useEffect } from 'react'
import emergence from 'emergence.js'

interface Props {
  children?: React.ReactNode
  location: Location
}

const Container: React.FC<Props> = ({ children, location }: Props) => {
  return (
    <div className="container">
      <div className="row">
        {children}
      </div>
    </div>
  )
}

export default Container