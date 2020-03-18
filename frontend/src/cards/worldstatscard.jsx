import React, { Component } from 'react';
import Card_a from './card1';

class Cards1 extends Component {
    constructor() {
        super();
        this.state = {
            totalCases: "",
            totalDeaths: "",
            totalRecovered: ""
        };
    }
    componentDidMount() {
        fetch(`http://localhost:3002/worldStats`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(r => r.json())
            .then(data => {
                this.setState({
                    totalCases: data.message.TotalCases,
                    totalDeaths: data.message.Deaths,
                    totalRecovered: data.message.Recovered
                })
            })
    }
    render() {
        const { totalCases, totalDeaths, totalRecovered } = this.state;
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-12">
                        <Card_a title="World Stats" text1={totalCases} text2={totalDeaths} text3={totalRecovered} />
                        {/* <Card2 title="India Stats" /> 
                        <Card3 title="Advice" />
                        <Card4 title="Helpline" /> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards1;
