import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png';
import './News-letter.css';
const NewsLetter = () => {
    return (
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter__content'>
                    <h2>Subscribe now to get useful travelling information</h2>
                    <div className='newsletter__input'>
                        <input type='email' placeholder='Enter your e-mail'/>
                        <button className='btn newsletter__btn'>Subscribe</button>
                    </div>
                    <p>
                        Embark on a journey of discovery! Subscribe to our newsletter for the latest travel insights, exclusive offers, and destination inspiration. Join a community of fellow adventurers and get ready to explore the world. Let us be your compass on the path to unforgettable adventures. Subscribe now!
                    </p>
                </div>
              </Col> 
            <Col lg='6'>
                <div className='newsletter__img'>
                <img src={maleTourist} alt=''/>        
                </div>
            </Col>  
        </Row>      
            </Container>
            
  )
}

export default NewsLetter