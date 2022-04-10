import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import userService from '../service/user.service';
import Modal from './Modal';


const Login = () => {

    const [identifier, setIdentifier] = useState();
    const [password, setPassword] = useState();
    const [log, setLog] = useState({})
    const [showModal, setShowModal] = useState(false);

  

    useEffect(() => {

           setLog(JSON.parse(localStorage.getItem('Login')))
           console.log(log)
        }, []);

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
            
            window.location.href = '/';

        }
        else{
            // popuperror = true
            console.log('failed')
            setShowModal(true)
        }

        console.log(identifier)
        console.log(password)
    }

    const Logout = () => {
        localStorage.setItem('Login', JSON.stringify({auth: false}))
        localStorage.setItem('Auth', JSON.stringify({}))
        setLog(JSON.parse(localStorage.getItem('Login')))
        window.location.href = '/';
    }

    return (
        <div className='bg_img_login'>
             <Modal title="Erreur" isActive={showModal} closeFunction={()=>setShowModal(!showModal)} type="information">
                <p>Une erreur est survenue, Identifiant ou mot de passe Incorrect.</p>
             </Modal>
             {log.auth===false?
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
                 : 
                 
                    <button className='logout__btn' onClick={() => Logout()}>
                        Se Déconnecter
                    </button>
                 
                 }
        </div>
    );
}

export default Login;
