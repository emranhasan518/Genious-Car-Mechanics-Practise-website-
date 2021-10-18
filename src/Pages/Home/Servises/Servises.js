import React, { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service'
import './services.css'


const Servises = () => {
    const [services, setService] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setService(data));
    },[])
    return (
        <div id="services">
            <h2 className="text-primary mt-4">Our Services</h2>
            <div className="service-container">
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Servises;