import React, { Component } from 'react';
import './card-style.css';

class Advice extends Component {

    constructor() {
        super();
        this.state = {
            advice: ""
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3002/advice`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(r => r.json())
            .then(data => {
                this.setState({
                    advice: data.message
                })
            })
    }
    render() {

        const { advice } = this.state;

        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-12">

                        <div className="card text-center shadow">
                            <div className="card-body text-dark">
                                <h4 className="card-title">Advice</h4>
                                <p className="card-text text-secondary">{advice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Advice;
