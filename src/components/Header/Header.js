import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <header>
                <nav className='header'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <Link to="/shop">Shop</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/inventory">Inventory</Link>
                        <Link to="/about">About</Link>
                        {
                            user ? 
                            <button onClick={handleSignOut}>Sing Out</button>
                            :
                            <Link to="login">Login</Link>
                        }       
                    </div>
                </nav>
        </header>
    );
};

export default Header;