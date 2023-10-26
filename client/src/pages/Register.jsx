import React from 'react';
import {Container, Row, Col,Form,FormGroup,Button} from 'reactstrap';
import { Link,useNavigate } from 'react-router-dom'
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import '../styles/Login.css';
import { useState, useContext } from 'react';

import { AuthContext } from '../context/AuthContext.js';
import { BASE_URL } from '../utils/config'

const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    userName:undefined,
    email: undefined,
    password:undefined
  })

  const {dispatch}=useContext(AuthContext)
  const HandleChange = (e) => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  }
  const HandleClick = async(e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body:JSON.stringify(credentials)
      });
      const result = await res.json();
      if (!res.ok) alert(result.message);
      dispatch({ type: 'REGISTER_SUCCESS' })
      console.log(result);
      { result.success && navigate('/login')}
    } catch(err) {
      alert(err.message);
    }
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
                  <Button className='btn secondary__btn auth__btn' type='submit' onClick={HandleClick}>Create Account</Button>
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