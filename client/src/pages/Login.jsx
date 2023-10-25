import React from 'react';
import {Container, Row, Col,Form,FormGroup,Button} from 'reactstrap';
import { Link } from 'react-router-dom'
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import '../styles/Login.css';
import { useState } from 'react';

const Login = () => {

  const [credentials, setCredentials] = useState({
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
                <img src={loginImg} alt=""/>
              </div>
              <div className='login__form'>
                <div className='user'>
                  <img src={userIcon} alt=""/>
                </div>
                <h2>Login</h2>
                <Form>
                  <FormGroup>
                    <input type='text' placeholder='Email' required id="email" onChange={HandleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type='password' placeholder='Password' required id="password" onChange={HandleChange}/>
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit' onClick={HandleClick}>Login</Button>
                </Form>
                <p>Don't have an accout?<Link to='/register'>Create Account</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login