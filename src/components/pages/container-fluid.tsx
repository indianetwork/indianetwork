import React, { useEffect } from 'react'
import emergence from 'emergence.js'

interface Props {
  children?: React.ReactNode
  location: Location
}

const ContainerFluid: React.FC<Props> = ({ children, location }: Props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {children}
      </div>
    </div>
  )
}

export default ContainerFluid
