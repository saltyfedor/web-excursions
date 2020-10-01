import React, { useState } from 'react'
import store from '../../../index.js'
import { logIn } from '../../../Redux/Actions/index.js';
import { useHistory } from "react-router-dom";


import './SignIn.css'

const SignIn = () => {
    const history = useHistory();
    const [login, updateLogin] = useState('');
    const [pass, updatePass] = useState('');

    const handleLoginRequest = () => {
        if (login.length > 0 && pass.length > 0) {
            fetch('http://localhost:3001/login', {
                method: 'post',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    login: login,
                    password: pass
                })
            }).then(res => res.json()).then(data => handleLogin(data))
        }
        else if (login.length === 0 || pass.length === 0) {
            console.log('bad credentials')
        }
        else{ 
            console.log('fuckup')
        }
    }

    const handleLogin = (data) => {
        if (data === true) {
            store.dispatch(logIn(true));
            history.push('admin')
        }
    }

    return (
        <div className="flex justify-center">
        <div className="ma5 inline-flex flex-column items-center pa4 ba br pa0 shadow-5">
            <p className="f1 b">Вход</p>
            <div className="dib">
                <label htmlFor="name" className="f6 b db mb2">Логин<span className="normal black-60"></span></label>
                    <input className="input-reset ba b--black-20 pa2 mb2 db" type="text" value={login} onChange={event => updateLogin(event.target.value)}/>
            </div>
            <div className="dib">
                <label htmlFor="price" className="f6 b db mb2">Пароль<span className="normal black-60"></span></label>
                <input className="input-reset ba b--black-20 pa2 mb2 db" type="text" value={pass} onChange={event => updatePass(event.target.value)} />
                <button className= "" onClick={handleLoginRequest}>Вход</button>
            </div>
            
            </div>
        </div>
    )
}

export default SignIn;