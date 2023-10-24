import React from 'react'
import { Container,Row, Button } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import Travel__logo from '../../assets/images/TravelBuddy_logo.png'
import './style.css';
const nav_links=[
  {
    path: '/home',
    display: 'Home'
  },
  {
  path: '/about',
  display: 'About'
  },
  {
  path: '/tours',
  display: 'Tours'
  }
]
  
const Header = () => {
  return (
    <header className='sticky__header'>
      <Container>
        <Row>
          <div className='nav__wrapper d-flex align-items-center justify-content-between'>
            <div className="logo d-flex align-items-start mt-1 justify-content-center">
              <img src={Travel__logo} alt=''/>
              <h1><a style={{ textDecoration: 'none' , color:'black'}} href="/"><strong style={{ color: '#ff7e01' }}>Travel</strong>Buddy</a></h1>
            </div>
            <div className='navigation'>
              <ul className='menu d-flex align-items-center gap-5'>
                {nav_links.map((item, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink className={navClass=>navClass.isActive?'active__link':'' } to={item.path}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='nav__right d-flex align-items-center gap-4'>
              <div className='nav__btns d-flex align-items-center gap-4'>
                <Button className='btn secondary__btn'><NavLink className={navClass=>navClass.isActive?'active__link':'' } to='/login'>Login</NavLink>
</Button>
                  <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>
              </div>
            </div>
            <span className='mobile__menu'>
                <i class="ri-menu-line"></i>
            </span>
          </div>
        </Row>
      </Container>
    </header>
    
  )
}

export default Header