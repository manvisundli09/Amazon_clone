import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
function Login() {

   const history = useNavigate(); 
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState(''); 

   const signIn = e => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password).then(auth => {
        history('/');
    })    
    .catch(error => alert(error.message))

    //firebase login
   }

   const register = e => {
    e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email, password).then((auth) => {
            //it successfully created a new user with email and password
            console.log(auth);
            if(auth){
                history('/');
            }
        })
        .catch(error => alert(error.message))

    //firebase register
   }

  return (
    <div className='login'>
        <Link to='/'>
        <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png' alt=''/>
        </Link>

        <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                
                <button className='login_signInButton' onClick={signIn} type='submit' >Sign In</button>
            </form>
            <p>By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.</p>

            <button className='login_registerButtion' onClick={register}>Creat your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
