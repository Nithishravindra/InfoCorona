import React from 'react';

import './card-style.css';

const Card=props=>{
    return(
        <div className="card text-center shadow">
            
        
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">{props.text1}</p>
            <p className="card-text text-secondary">{props.text2}</p>
            <p className="card-text text-secondary">{props.text3}</p>
        </div>
        </div>
    );
}
export default Card;