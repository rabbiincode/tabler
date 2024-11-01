import { useState } from 'react'
import { navbar } from './navbar_data'
import { NavbarData } from '../../../interface/navbar'
import './_navbar.scss'

const Navbar = () => {
  const [active, setActive] = useState(0)
  return (
    <div className='navbar'>
      {
        navbar.map((menu: NavbarData, i: number) => (
          <span key={i} onClick={() => setActive(i)} className={`${active === i && 'active'}`}>
            {menu.icon}
            {menu.menu}
          </span>
        ))
      }
    </div>
  )
}

export default Navbar