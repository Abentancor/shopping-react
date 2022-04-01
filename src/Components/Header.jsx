import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  library.add(faCartShopping, faBars)

const [showMenu, setShowMenu] = useState(false)
const toggleMenu = () => {
  setShowMenu(!showMenu)
}
const hidden = showMenu ? 'hidden' : '' 

  return (
  <>
      <div className='text-4xl text-white font-bold p-2 bg-slate-900 flex justify-between list-none'>
        <Link to='/'>
          <h1 className='ml-10 hover:scale-125'>Nike</h1> 
        </Link>
              <li onClick={toggleMenu} className='flex self-center order-last ring ring-sky-900 rounded-lg cursor-pointer p-0.5 mr-2 hover:scale-105 hover:ring-white sm:hidden'>
                <FontAwesomeIcon icon="fa-solid fa-bars" className='w-6 h-6' />
              </li>
          <ul className={`${hidden} flex justify-between flex-col sm:flex-row`}>
            <NavLink to="/Products">
              <li className='px-3 text-lg flex self-center hover:scale-125'>Productos</li>
            </NavLink>
            <NavLink to="/Contact">
              <li className='px-3 text-lg flex self-center hover:scale-125 '>Contacto</li>
            </NavLink>
            <NavLink to='/Cart'>
              <li className=' hover:scale-125 mr-10'><FontAwesomeIcon icon="fa-solid fa-cart-shopping" className='mx-4 w-6' />0</li>
            </NavLink>
          </ul>
      </div>
  </>
  )
}

export default Header