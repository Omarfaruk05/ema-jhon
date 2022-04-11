import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmedPasswordBlur = event => {
        setConfirmedPassword(event.target.value);
    }

    if(user){
        navigate('/');
    }

    const handleCreateUser = (event) => {
        event.preventDefault();

        if(password !== confirmedPassword){
            setError('Your two password did not match');
            return;
        }
        if(password.length < 6){
            setError('Password must be 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
           <div>
                <h1 className='form-title'>SignUp</h1>
               <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="conferm-password">Conferm Password</label>
                        <input onBlur={handleConfirmedPasswordBlur} type="password" name="conferm-password" id="" required />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sigm Up" />
               </form>
               <p>
                    Already have an account ? <Link className='form-link' to="/login">Login</Link>
                </p>
           </div>
        </div>
    );
};

export default SignUp;