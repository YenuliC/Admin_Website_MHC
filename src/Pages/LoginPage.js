import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './LoginPage.css'
import Background from '../components/Background';
import {signInWithEmailAndPassword} from "firebase/auth";
import  {auth} from "../firebase";

const LoginPage= () => {

    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null);

    const signIn = (e) => {
      e.preventDefault(); 
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
          // The user is signed in
        const user = userCredential.user;
        console.log('Admin signed in:', user);
        // You may redirect or perform other actions upon successful login
      
        navigate('/dashboard');
      })
      .catch((error) => {
        // Handle sign-in errors
        const errorCode = error.code;
        const errorMessage = error.message;

        
        // Updated lines to display error message
        setLoginError('Invalid email or password. Please try again.');
        console.error('Admin sign-in error:', errorCode, errorMessage);
      });
  };


  return (

    <div className='signup-page'>
      <Header/>
     <Background/>
  
    <div className='sign-in-container'>
    <form onSubmit={signIn}>
        <h1>Log for HEALTH HUB</h1>
        <p className="subtext">First, add your email and password.</p>
        <input 
        type='email' 
        placeholder='Enter you Email' 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='input-boxes'
        >
        </input>
        <input 
        type='password' 
        placeholder='Enter your password' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className='input-boxes'
        >
        </input>

        {loginError && <p className="error-message">{loginError}</p>}
        
        <button type='submit'className="login-button">Log In</button>
    </form>
    </div>
    </div>
  )
}

export default LoginPage;