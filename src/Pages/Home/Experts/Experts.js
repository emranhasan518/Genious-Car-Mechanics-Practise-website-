import React from 'react';

import expert1 from '../../../images/Mechanic/mechanic1.jpg'
import expert2 from '../../../images/Mechanic/mechanic2.jpg'
import expert3 from '../../../images/Mechanic/mechanic3.jpg'
import expert4 from '../../../images/Mechanic/mechanic4.jpg'
import Expart from '../Expart/Expart';

const experts =[
    {
        img: expert1,
        name: 'Jonathon James',
        expertize: 'Engine-expert'
    },
    {
        img:expert2,
        name: 'Andrew Rossle',
        expertize: 'Polish-expert'
    },
    {
        img:expert3,
        name: 'karma cheyaua',
        expertize: 'Tuning-expert'
    },
    {
        img:expert4,
        name: 'Minjara Rashid',
        expertize: 'Gearbox-speacialist'
    },
]

const Experts = () => {
    return (
        <div id="experts" className="container" style={{marginTop:'20px', borderTop:'2px solid black'}}>
            <h2 className="text-primary">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expart
                        key={expert.name}
                        expert={expert}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Experts;