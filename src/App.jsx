import React from 'react'

import { Route, Routes } from 'react-router'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        </Routes>

  </>
  )
}

export default App
