import React from 'react';
import { Container, Row, Col,ListGroup,ListGroupItem} from 'reactstrap';
import {Link } from 'react-router-dom';
import './Footer.css';
const discover_links=[
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
  display: 'Tour'
  }
]
const Quick_links=[
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
  path: '/login',
  display: 'Login'
  },
  {
  path: '/register',
  display: 'Register'
  }
]
const Footer = () => {
  return (
    <section className='footer'>
      <Container className='footer__container'>
        <Row>
          <Col lg='3'>
            <div className="logo" style={{marginBottom:'1rem'}}>
              <h2><a style={{ textDecoration: 'none' , color:'black'}} href="/"><strong style={{ color: '#ff7e01' }}>Travel</strong>Buddy</a></h2>
              
            </div>
            <div className='footer__content mt-2 mb-2'>
              <p>
              A trusted companion for explorers, creating timeless memories through expert guidance, exceptional experiences, and a passion for wanderlust.
            </p>
            </div>
            <div className='social__logo d-flex gap-4'>
              <a href="https://www.youtube.com/" target="_blank"><i class="ri-youtube-line"></i></a>
              <a href="https://github.com/priyabrat249" target="_blank"><i class="ri-github-fill"></i></a>
              <a href="https://www.facebook.com/priyabrat.swain.56/" target="_blank"><i class="ri-facebook-circle-fill"></i></a>
              <a href="https://www.instagram.com/sky_huntrrrrr/?next=%2F" target="_blank"><i class="ri-instagram-line"></i></a>
              <a href="https://www.linkedin.com/in/priyabrat-swain-85a555203/" target="_blank"><i class="ri-linkedin-box-fill"></i></a>    
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer__quick-links'>
              {discover_links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {Quick_links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <ListGroup className='footer__contacts'>
              <h5 className='footer__link-title'>Contacts</h5>
              <ListGroupItem className='ps-0 border-0 d-flex mb-0 align-items-center gap-3'>
                <h6 className='d-flex mb-0 align-items-center gap-2' >
                  <span><i class="ri-map-pin-line"></i></span>
                  Address:
                </h6>
                <p className='mb-0'>Odisha, Dhenkanal</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex mb-0 align-items-center gap-3'>
                <h6 className='d-flex mb-0 align-items-center gap-2' >
                  <span><i class="ri-mail-line"></i></span>
                  Email:
                </h6>
                <p className='mb-0'>priyabratswain2017@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex mb-0 align-items-center gap-3'>
                <h6 className='d-flex mb-0 align-items-center gap-2' >
                  <span><i class="ri-phone-fill"></i></span>
                  Phone:
                </h6>
                <p className='mb-0'>(+91)7682887709</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        
      </Container>
      <div className='footer_copyright'>
          <p>Copyright <i class="ri-copyright-line"></i> 2023 priyabratswain. All Rights Reserved</p>
      </div>
    </section>
  )
}

export default Footer;