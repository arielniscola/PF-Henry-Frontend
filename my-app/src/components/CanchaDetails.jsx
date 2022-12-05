import React from 'react';

const CanchaDetails = (props) => {
    return (
        <div className="card">
        <img src={props.img} alt="img" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        </div>
    );
    }

export default CanchaDetails;
