import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, population, flags, region } = props.country;
    return (
        <div className='country'>
            <h3>Country Name: <span style={{ color: 'green' }}>{name}</span></h3>
            <h5>Population: {population}</h5>
            <p>Region: {region}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;