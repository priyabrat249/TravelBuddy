import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import TourDetails from '../pages/TourDetails';
import Tours from '../pages/Tours';


const Router = () => {
  return (
      <Routes>
        <Route path='/' element={<Navigate to='/home' />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/tours/search' element={<SearchResultList />}/>
        <Route path='/tour/:id' element={<TourDetails />}/>
        <Route path='/tours' element={<Tours />}/>      
    </Routes>
  )
}

export default Router;