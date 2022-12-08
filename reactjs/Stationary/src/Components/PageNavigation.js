import React from 'react'
import { Nav, NavLink } from 'react-router-dom'

function PageNavigation({title}) {
  return (
    <div>
    <NavLink to='/'>Home</NavLink>/{title}
    </div>
    
  )
}

export default PageNavigation