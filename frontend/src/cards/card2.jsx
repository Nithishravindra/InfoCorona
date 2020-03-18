import React from 'react';
import './card-style.css';

const Card_b = props => {
    return (
        <div className="card text-center shadow">
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p style={{ fontsize: 20 }} className="card-text text-secondary" >NoOfPeopeleAffected: 114 </p>
                <p className="card-text text-secondary">DateOfUpdate: 16.03.2020</p>
                <p className="card-text text-secondary">TimeOfUpdate: 04:00 PM</p>
                <p className="card-text text-secondary">NoOfIndianCase: 97</p>
                <p className="card-text text-secondary">NoOfForeignCase: 17</p>
                <p className="card-text text-secondary">NoOfCuredCase: 13</p>
                <p className="card-text text-secondary">NoOfDeath: 2</p>
            </div>
        </div>
    );
}
export default Card_b;
