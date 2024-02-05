import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    MoblieZone
                </div>
                <div className='flex gap-3'>
                    <li className='list-none'><Link to="/home">Home</Link></li>
                    <li className='list-none'><Link to="/fav">Fav</Link></li>
                    <li className='list-none'><Link to="/login">Login</Link></li>
                </div>
            </div>
        </div>
    );
};

export default Header;