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

            //Récupération du localstorage Login
           setLog(JSON.parse(localStorage.getItem('Login')))
           console.log(log)
        }, []);

    const Login = () => {
        
        const obj ={
            identifier : identifier,
            password: password
        }

        //Appel du service login
        userService.login(obj)

        let log =JSON.parse(localStorage.getItem('Login'))
        
        //si authentification == success
        if(log.auth === true){
            console.log('success')
            localStorage.setItem('Auth', JSON.stringify(obj))
            
            //redirection vers homePage
            window.location.href = '/';

        }
        else{
            
            //si Authentification == failed
            //Message d'erreur
            setShowModal(true)
        }

    }

    const Logout = () => {
        //vider le localstorage pour déconnecter l'utilisateur
        localStorage.setItem('Login', JSON.stringify({auth: false}))
        localStorage.setItem('Auth', JSON.stringify({}))
        setLog(JSON.parse(localStorage.getItem('Login')))

        //Redirection vers homePage
        window.location.href = '/';
    }

    return (
        <div className='bg_img_login'>
             <Modal title="Erreur" isActive={showModal} closeFunction={()=>setShowModal(!showModal)} type="information">
                <p>Contenue ajouté à votre liste de Films</p>
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
