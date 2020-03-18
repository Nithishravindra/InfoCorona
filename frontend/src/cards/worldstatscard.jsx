import React, { Component } from 'react';
import './card-style.css';
// import Card_a from './card1';

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

                        {/* use ol li nesting */}


                        <div className="card text-center shadow">
                            <div className="card-body text-dark">
                                <h4 className="card-title">World Stats</h4>
                                <p className="card-text text-secondary">Total Cases : {totalCases}</p>
                                <p className="card-text text-secondary">Total Deaths : {totalDeaths}</p>
                                <p className="card-text text-secondary">Total Recovery : {totalRecovered}</p>
                            </div>
                        </div>

                        {/* 
                        <Card_a title="World Stats" 
                        text1={totalCases} 
                        text2={totalDeaths} 
                        text3={totalRecovered} />
                         */}
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards1;
