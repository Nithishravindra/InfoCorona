import React, { Component } from 'react';
import './card-style.css';
// import Card_b from './card2';

class Cards2 extends Component {

    constructor() {
        super();
        this.state = {
            totalCases: "",
            noOfIndianNationalCase: "",
            noOfForeignNationalCase: "",
            activeCases: "",
            totalCuredCase: "",
            totalDeath: "",
            dateOfUpdate: "",
            timeOfUpdate: "",
            states: [],
            TotalIndianNationalCases: [],
            TotalForeignNationalCases: [],
            CuredCase: [],
            DeathCase: []
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3002/indStats`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(r => r.json())
            .then(data => {
                console.log(data)
                let res = data.message;

                this.setState({

                    totalCases: res.totalCases,
                    noOfIndianNationalCase: res.noOfIndianNationalCase,
                    noOfForeignNationalCase: res.noOfForeignNationalCase,
                    activeCases: res.activeCases,
                    totalCuredCase: res.totalCuredCase,
                    totalDeath: res.totalDeath,
                    dateOfUpdate: res.dateOfUpdate,
                    timeOfUpdate: res.timeOfUpdate,
                    states: res.states,
                    TotalIndianNationalCases: res.TotalIndianNationalCases,
                    TotalForeignNationalCases: res.TotalForeignNationalCases,
                    CuredCase: res.CuredCases,
                    DeathCase: res.DeathCases

                })
            })

    }

    render() {
        const { totalCases, activeCases,noOfIndianNationalCase, noOfForeignNationalCase, totalCuredCase, totalDeath, dateOfUpdate, timeOfUpdate } = this.state

        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-12">

                        {/* use ol li nesting  */}
                        
                        <div className="card text-center shadow">
                            <div className="card-body text-dark">
                                <h4 className="card-title">IND Stats</h4>
                                <p style={{ fontsize: 20 }} className="card-text text-secondary" >Total Cases : {totalCases} </p>
                                <p className="card-text text-secondary">ActiveCases : {activeCases}</p>
                                <p className="card-text text-secondary">DateOfUpdate : {dateOfUpdate}</p>
                                <p className="card-text text-secondary">TimeOfUpdate: {timeOfUpdate}</p>
                                <p className="card-text text-secondary">NoOfIndianCase: {noOfIndianNationalCase}</p>
                                <p className="card-text text-secondary">NoOfForeignCase: {noOfForeignNationalCase}</p>
                                <p className="card-text text-secondary">NoOfCuredCase: {totalCuredCase}</p>
                                <p className="card-text text-secondary">NoOfDeath: {totalDeath}</p>

                            </div>
                        </div>


                        {/* <Card_b title="India Stats" /> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards2;
