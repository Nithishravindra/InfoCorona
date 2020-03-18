import React, { Component } from 'react';
import Card_d from './card4';

class Cards4 extends Component {
    constructor() {
        super();
        this.state = {
            number: ""
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


                })
            })

    }
    render() {

        const { state, contactNo } = this.state;
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-12">
                        <Card_d title="Helpline" text1={state} text2={contactNo} />

                    </div>
                </div>
            </div>
        );
    }
}
export default Cards4;
