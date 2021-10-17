import React from 'react';
import './service.css'

const Service = ({service}) => {
    return (
        <div className="service">
            <h3>{service.name}</h3>
            <img src={service.img} alt="" />
            <h5>{service.price}</h5>
            <p className="px-3">{service.Description}</p>
        </div>
    );
};

export default Service;