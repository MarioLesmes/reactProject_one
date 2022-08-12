import React    from 'react'
import Scibar   from 'components/scibar'

const PrivateLayout = ({ children }) => {
  return (
    <div>
      <div> Hola perros soy private layout</div>  
      <Scibar />
      { children}
    </div>
  )
}

export default PrivateLayout