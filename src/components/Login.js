import Link from 'next/link';
import React, { useState } from 'react';
import userService from '../service/user.service';

const Login = () => {

    const [identifier, setIdentifier] = useState();
    const [password, setPassword] = useState();


    const Login = () => {
        const obj ={
            identifier : identifier,
            password: password
        }

        userService.login(obj)

        let log =JSON.parse(localStorage.getItem('Login'))
        
        if(log.auth === true){
            console.log('success')
            localStorage.setItem('Auth', JSON.stringify(obj))
        }
        else{
            // popuperror = true
            console.log('failed')
        }
       
        


        console.log(identifier)
        console.log(password)
    }

    return (
        <div className='card__login'>
            <h1 className='card__title'>Sign In</h1>

            <form className='auth_textfield' onSubmit={(e) => e.preventDefault()}>

                <input className='textfield' type="text" placeholder='Email or phone number' value={identifier} onChange={(e) => {
                setIdentifier(e.target.value);
                }}/>

                <input className='textfield' type="password" placeholder='Password' value={password} onChange={(e) => {
                setPassword(e.target.value);
                }}/>

                <button type="submit" className='login__btn' onClick={() => Login()}>Sign In</button>
                </form>

                <span className='login_signup'>New to Netflix?
                <Link href="/register">
                 <strong>Sign up now</strong>
                 </Link>
                 </span>


           
            
        </div>
    );
}

export default Login;
