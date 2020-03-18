import React, { Component } from 'react';
import Card from './cards';
import Card2 from './cards2';
import Card3 from './cards3';
import Card4 from './card4';

class Cards extends Component {
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
                        <Card title="World Stats" text1={totalCases} text2={totalDeaths} text3={totalRecovered} />
                        <Card2 title="India Stats" />
                        <Card3 title="Advice" />
                        <Card4 title="Helpline" />
                    </div>

                </div>
            </div>
        );
    }
}
export default Cards;
