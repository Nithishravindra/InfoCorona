import React, { Component } from 'react';
import './card-style.css';

class WorldStats extends Component {

    constructor() {
        super();
        this.state = {
            totalCases: "",
            totalDeaths: "",
            totalRecovered: ""
        };
    }

    componentDidMount() {
        fetch(`https://infocorona.nithishravindra.com/worldStats`, {
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
                        <div className="card text-center shadow">
                            <div className="card-body text-dark">
                                <h4 className="card-title">World Statics</h4>
                                <p className="card-text text-secondary">Total Cases : {totalCases}</p>
                                <p className="card-text text-secondary">Total Deaths : {totalDeaths}</p>
                                <p className="card-text text-secondary">Total Recovery : {totalRecovered}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default WorldStats;
