
import { useState } from 'react'
import {auth} from './Firebase/firebase_config'
import {createUserWithEmailAndPassword, signOut,
        signInWithEmailAndPassword, onAuthStateChanged,

} from 'firebase/auth'

const Login = props =>{
    const [signUpPass, setSignUpPass] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');

    const [signInPass, setSignInPass] = useState('');
    const [signInEmail, setSignInEmail] = useState('')
    const [error, setError] = useState(false);


    const getEmail = (e) =>{
        e.preventDefault();
        setSignUpEmail(e.target.value);
    }

    const getPassword = (e) =>{
        e.preventDefault();
        setSignUpPass(e.target.value);
    }

    const signUp = async(e) =>{
        e.preventDefault();
        try {
            let signup =  await createUserWithEmailAndPassword(auth, signUpEmail, signUpPass)
            await console.log(signup)
            
        } catch (error) {
            console.log(error);
            
        } finally{
            setSignUpEmail('');
            setSignUpPass('');
        }

    }
    const signOutClick = async() =>{
        await signOut(auth) 
        // console.log('User signed out')

    }

    const instaLogin = async(e) =>{
        try {
            e.preventDefault();
            const cred = await signInWithEmailAndPassword(auth, signInEmail, signInPass)
            console.log(cred.user);
        } catch (error) {
            setError(true);
            setInterval(()=>{
                setError(false);
            },5000)
            
        }
    }

    const getSignInEmail = (e) =>{
        e.preventDefault();
        setSignInEmail(e.target.value);
    }

    const getSignInPassword = (e) =>{
        e.preventDefault();
        setSignInPass(e.target.value);
    }
    const unSubAuth = onAuthStateChanged(auth, (user) =>{
        if(user){
            console.log('logged in', user)
        }else{
            console.log('signed out')
            unSubAuth();
        }
    })



    return(

        <div className='main-container'>
        <div className='login-container'>
          <h1>Instagram</h1>
          <div className='inputs'>
            <input onChange={getSignInEmail}value={signInEmail} placeholder='Phone number, username, or email'  required/>
            <input onChange={getSignInPassword} value={signInPass} type='password' placeholder='Password' required/>
            {error && <div className='errorMessage'> There was and error </div>}
            <button onClick={instaLogin} className='login-button'>Log In</button>
          </div>
          <div className='or-bar'>
            <div className='hor-bar' />
            <p className='or'>or</p> 
            <div className='hor-bar'/> 
          </div>
  
          <div>
            {/**This is how you sign into your account */}
            <div>
                <h3>Sign Up</h3>
            </div>
            <form onSubmit={signUp}>
                <div className='inputs'>
                <input onChange={getEmail} value={signUpEmail} type='email'placeholder='Phone number, username, or email'  required/>
                <input onChange={getPassword} value={signUpPass}type='password' placeholder='Password' required/>
                <button onClick={signUp} type='submit' className='sign-up-button'>Sign Up</button>
                </div>
            </form >
            
          </div>
          <button onClick={signOutClick}>Sign out</button>
  
  
  
        </div>
      </div>
    )
}

export default Login