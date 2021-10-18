import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/Notfound/notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="" />
            <h1 className="text-danger">Page Not Found!!</h1>
            <Link to="/">
            <button>Go back</button>
            </Link>
        </div>
    );
};

export default NotFound;