import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

const Service = ({service}) => {
    const {id, name, img, price, Description } =service;
    return (
        <div className="service pb-3">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <h5>{price}</h5>
            <p className="px-3">{Description}</p>
            <Link to={`/booking/${id}`}>
            <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;