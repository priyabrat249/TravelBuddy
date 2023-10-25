import React from 'react';
import {Container, Row, Col,Form,FormGroup,Button} from 'reactstrap';
import { Link } from 'react-router-dom'
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import '../styles/Login.css';
import { useState } from 'react';

const Register = () => {

  const [credentials, setCredentials] = useState({
    userName:undefined,
    email: undefined,
    password:undefined
  })
  const HandleChange = (e) => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  }
  const HandleClick = (e) => {
    e.preventDefault();
    console.log(credentials);
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='login__container d-flex justify-content-between'>
              <div className='login__img'>
                <img src={registerImg} alt=""/>
              </div>
              <div className='login__form'>
                <div className='user'>
                  <img src={userIcon} alt=""/>
                </div>
                <h2>Register</h2>
                <Form>
                <FormGroup>
                    <input type='text' placeholder='Username' required id="userName" onChange={HandleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type='text' placeholder='Email' required id="email" onChange={HandleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type='password' placeholder='Password' required id="password" onChange={HandleChange}/>
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit' onClick={HandleClick}>Login</Button>
                </Form>
                <p>Already have an accout?<Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register