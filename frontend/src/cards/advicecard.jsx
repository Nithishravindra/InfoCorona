import React, { Component } from 'react';
import Card_c from './card3';

class Cards3 extends Component {
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
                        <Card_c title="Advices" text1={advice} />

                    </div>
                </div>
            </div>
        );
    }
}
export default Cards3;
