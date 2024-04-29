import React, { useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCheckbox, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import {signup} from "../features/auth/model";

function SignUp() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic first name validation
    if (!first_name.trim()) {
      setFirstNameError('First name is required');
      return;
    } else {
      setFirstNameError('');
    }

    // Basic last name validation
    if (!last_name.trim()) {
      setLastNameError('Last name is required');
      return;
    } else {
      setLastNameError('');
    }

    // Basic email validation
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

    // Basic repeat password validation
    if (password !== repeatPassword) {
      setRepeatPasswordError('Passwords do not match');
      return;
    } else {
      setRepeatPasswordError('');
    }

    // Check if terms are agreed
    if (!termsAgreed) {
      setRegistrationError('Please agree to the terms of service');
      return;
    } else {
      setRegistrationError('');
    }

    try {
      // Make API call to register user
      await signup({
        first_name,
        last_name,
        email,
        password,
      });
      // Handle successful registration
      console.log('Registration successful');
    } catch (error: any) {
      // Handle login error
      console.error('Login failed', error);
      if (error.response && error.response.status === 401) {
        setRegistrationError('User with such email already exist');
      } else {
        setRegistrationError('An error occurred while registering');
      }
    }
  };

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
                {firstNameError && <div className="text-danger">{firstNameError}</div>}

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
                {lastNameError && <div className="text-danger">{lastNameError}</div>}

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
                {emailError && <div className="text-danger">{emailError}</div>}

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
                {passwordError && <div className="text-danger">{passwordError}</div>}

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
                {repeatPasswordError && <div className="text-danger">{repeatPasswordError}</div>}

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
                {registrationError && <div className="text-danger">{registrationError}</div>}

                <MDBBtn type="submit" className='mb-4' size='lg'>Register</MDBBtn>
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
