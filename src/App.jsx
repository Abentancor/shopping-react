import React from 'react'
import { Outlet } from 'react-router'
import Header from './Components/Header'



const App = () => {
  return (
    <div className=''>
      <Header/>
      <div className='bg-gradient-to-b from-slate-900 via-slate-500 to-white'>
      <Outlet/>
      </div>
    </div>
  )
}

export default App