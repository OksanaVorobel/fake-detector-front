import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {login} from "../features/auth/model";
import {useActions} from "../hooks/useActions";

function SignIn() {
  const navigate = useNavigate();
 const { logIn } = useActions();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    // Basic password validation
    if (!password || password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    } else {
      setPasswordError('');
    }

    try {
      await login({email, password});
      logIn();
      navigate('/detect');
    } catch (error: any) {
      console.error('Login failed', error);
      if (error.response && error.response.status === 401) {
        setLoginError('Invalid email or password');
      } else {
        setLoginError('An error occurred while logging in');
      }
    }
  };

  return (
    <MDBContainer>
      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <form onSubmit={handleSubmit}>
            <MDBRow>
              <MDBCol md='10' lg='6'
                      className='order-2 order-lg-2 d-flex flex-column justify-content-center align-items-center'>
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput
                      label='Email'
                      id='form1'
                      type='email'
                      className='w-100'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                  />
                </div>
                {emailError && <div className="text-danger">{emailError}</div>}

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput
                      label='Password'
                      id='form3'
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                  />
                </div>
                {passwordError && <div className="text-danger">{passwordError}</div>}

                <MDBBtn type="submit" className='mb-4' size='lg'>Log in</MDBBtn>
                {loginError && <div className="text-danger">{loginError}</div>}

              </MDBCol>

              <div className="mt-auto d-flex justify-content-end">
                <a href="/signup" className="text-decoration-none">Create an account</a>
              </div>

              <MDBCol md='10' lg='6' className='order-1 order-lg-1 d-flex flex-column align-items-center'>
                <div className="mb-4">
                  <MDBCardImage
                      src='https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1713903508~exp=1713904108~hmac=ea076968b347c0a5e52383acd47218b47e7163416facd8224f766f2eb3c68f00'
                      fluid/>
                </div>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignIn;