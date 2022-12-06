import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import SuperHeroGrid from './pages/SuperHeroGrid'
import SuperHeroList from './pages/SuperHeroList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='navbar fixed-top navbar-expand-sm navbar-light bg-light pb-0'>
          <ul className="navbar-nav nav-tabs">
            <li className="nav-item">
              <NavLink to='/superhero-list' className='nav-link'>
                Super Hero List
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/superhero-grid' className='nav-link'>
                Super Hero Grid
              </NavLink>
            </li>
          </ul>
      </nav>
      <Routes>
        <Route path='/superhero-list' element={<SuperHeroList />} />
        <Route path='/superhero-grid' element={<SuperHeroGrid />} />
        <Route path='*' element={<SuperHeroList />} />
      </Routes>
    </>
  )
}

export default App
