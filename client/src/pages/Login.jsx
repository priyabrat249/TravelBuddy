import React from 'react';
import {Container, Row, Col,Form,FormGroup,Button} from 'reactstrap';
import { Link,useNavigate } from 'react-router-dom'
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import '../styles/Login.css';
import { useState , useContext} from 'react';
import { AuthContext } from '../context/AuthContext.js';
import { BASE_URL } from '../utils/config'

const Login = () => {
  const navigate = useNavigate();
  const {dispatch}=useContext(AuthContext)

  const [credentials, setCredentials] = useState({
    email: undefined,
    password:undefined
  })
  const HandleChange = (e) => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  }
  const HandleClick = async(e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_' })
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body:JSON.stringify(credentials)
      });
      const result = await res.json();
      if (!res.ok) alert(result.message)
      console.log(result);
      dispatch({ type: 'LOGIN_SUCCESS', payload: result.data })
      { result.success && navigate('/') }
    } catch (err) {
      dispatch({type:'LOGIN_FAILURE',payload: err.message})
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