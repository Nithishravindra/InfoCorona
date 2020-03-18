import React from 'react';

import './card-style.css';

const Card = props => {
    return (
        <div className="card text-center shadow">

            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">karnataka:104</p>
                <p className="card-text text-secondary">Andhra Pradesh:0866-2410978</p>
                <p className="card-text text-secondary">Tamil Nadu:044-29510500</p>
                <p className="card-text text-secondary">Kerala:0471-2552056</p>
            </div>
        </div>
    );
}
export default Card;