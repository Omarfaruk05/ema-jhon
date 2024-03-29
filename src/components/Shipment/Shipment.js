import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur= event => {
        setName(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneNumberdBlur = event => {
        setPhoneNumber(event.target.value);
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        const shipping = {name, email, address, phoneNumber};
        console.log(shipping);
    }

    return (
        <div className='form-container'>
           <div>
                <h1 className='form-title'>Shipping Information</h1>
               <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Your Email</label>
                        <input value={user?.email} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="phone-number">Phone Number</label>
                        <input onBlur={handlePhoneNumberdBlur} type="text" name="phone-number" id="" required />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
               </form>
           </div>
        </div>
    );
};

export default Shipment;