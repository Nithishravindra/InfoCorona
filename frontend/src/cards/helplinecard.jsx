import React, { Component } from 'react';
import './card-style.css';
// import Card_d from './card4';

class Cards4 extends Component {
    constructor() {
        super();
        this.state = {
            info: []
        };
    }
    componentDidMount() {
        fetch(`http://localhost:3002/helpline`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(r => r.json())
            .then(data => {
                this.setState({
                    info: data.message
                })
            })

    }

    render() {

        const { info } = this.state;

        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card text-center shadow">
                            <div className="card-body text-dark">

                                {info.map((item, index) => (
                                    <div key={index} >
                                        <h4 className="card-title">{item.state}</h4>
                                        <p className="card-text text-secondary">{item.contactNo}</p>
                                    </div>

                                ))}
                            </div>
                        </div>
                        {/* <Card_d title="Helpline" text1={state} text2={contactNo} /> */}

                    </div>
                </div>
            </div>
        );
    }
}
export default Cards4;
