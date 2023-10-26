import React, {useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png';
import './News-letter.css';
const NewsLetter = () => {
    const [email,setEmail]=useState(null)
    const HandleClick = () => {
        alert(`Successfully subscribed to ${email}`);
    }
    const HandleChange = (e) => {
        setEmail(  e.target.value );
    }
    return (
    <section className='newsletter'>

    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter__content'>
                    <h2>Subscribe now to get useful travelling information</h2>
                    <div className='newsletter__input'>
                        <input type='email' placeholder='Enter your e-mail' id='email' onChange={HandleChange}/>
                        <button className='btn newsletter__btn on' onClick={HandleClick} on>Subscribe</button>
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
        </section>
            
  )
}

export default NewsLetter