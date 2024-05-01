import React, { useState } from 'react';
import {
  MDBBtn, MDBCard, MDBCardBody, MDBCardImage,
  MDBCheckbox, MDBCol, MDBContainer, MDBIcon,
  MDBInput, MDBRow
} from 'mdb-react-ui-kit';

import { signup } from "../features/auth/model";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";

function SignUp() {
  const navigate = useNavigate();
  const { logIn } = useActions();

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [ValidationError, setValidationError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Basic first name validation
    if (!first_name.trim()) {
      setValidationError('First name is required');
      return;
    }

    // Basic last name validation
    if (!last_name.trim()) {
      setValidationError('Last name is required');
      return;
    }

    // Basic email validation
    if (!email || !email.includes('@')) {
      setValidationError('Please enter a valid email address');
      return;
    }

    // Basic password validation
    if (!password || password.length < 6) {
      setValidationError('Password must be at least 6 characters long');
      return;
    }

    // Basic repeat password validation
    if (password !== repeatPassword) {
      setValidationError('Passwords do not match');
      return;
    }

    // Check if terms are agreed
    if (!termsAgreed) {
      setValidationError('Please agree to the terms of service');
      return;
    }

    signup({
      first_name,
      last_name,
      email,
      password,
    })
        .then(() => logIn()).then(() => navigate('/detect'))
        .catch((error: any) => {
          if (error.response && error.response.status === 400) {
            setValidationError('User with such email already exist. Try another one');
          } else {
            setValidationError('An error occurred while registering');
          }
        });
  }

  return (
    <MDBContainer>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <form onSubmit={handleSubmit}>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput
                    label='First Name'
                    id='first_name'
                    type='text'
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    className='w-100'
                    required
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput
                    label='Last Name'
                    id='last_name'
                    type='text'
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    className='w-100'
                    required
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput
                    label='Email'
                    id='email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput
                    label='Password'
                    id='password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg'/>
                  <MDBInput
                    label='Repeat your password'
                    id='repeatPassword'
                    type='password'
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    required
                  />
                </div>

                <div className='mb-4'>
                  <MDBCheckbox
                    name='termsAgreed'
                    value=''
                    id='termsAgreed'
                    label='I agree all statements in Terms of service'
                    onChange={(e) => setTermsAgreed(e.target.checked)}
                    required
                  />
                </div>

                <MDBBtn type="submit" className='mb-4' size='lg'>Register</MDBBtn>
                {ValidationError && <div className="text-danger">{ValidationError}</div>}
              </MDBCol>

              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex flex-column align-items-center'>
                <div className="mb-4">
                  <MDBCardImage
                    src='https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-2242.jpg?t=st=1713904534~exp=1713908134~hmac=f7948a1e7ff550560e88ed91a66750b2651e39016e7c87e40b279680efb45c4f&w=740'
                    fluid
                  />
                </div>
                <div className="mt-auto">
                  <a href="/login" className="text-decoration-none">I am already a member</a>
                </div>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;
