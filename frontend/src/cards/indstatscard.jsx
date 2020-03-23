import React, { Component } from 'react';
import './card-style.css';

const columnHeader = ['State', 'TotalIndianNational', 'TotalForeigNational', 'Cured', 'Death']

class IndStats extends Component {

    constructor() {
        super();
        this.state = {
            totalCases: "",
            noOfIndianNationalCase: "",
            noOfForeignNationalCase: "",
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
        fetch(`https://infocorona.nithishravindra.com/indStats`, {
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
                    totalCuredCase: res.totalCuredCase,
                    totalDeath: res.totalDeath,
                    dateOfUpdate: res.dateOfUpdate,
                    timeOfUpdate: res.timeOfUpdate,
                    states: res.states,
                    TotalIndianNationalCases: res.TotalIndianNationalCaseslist,
                    TotalForeignNationalCases: res.TotalForeignNationalCaseslist,
                    CuredCase: res.CuredCaseslist,
                    DeathCase: res.DeathCaseslist
                })
            })
    }


    getTableData() {
        let res = [];
        let state = this.state.states
        let indNat = this.state.TotalIndianNationalCases
        let forNat = this.state.TotalForeignNationalCases
        let cure = this.state.CuredCase
        let death = this.state.DeathCase

        for (var i = 0; i < state.length; i++) {
            res.push(
                <tr >
                    <td key={i}>{state[i]}</td>
                    <td key={i}>{indNat[i]}</td>
                    <td key={i}>{forNat[i]}</td>
                    <td key={i}>{cure[i]}</td>
                    <td key={i}>{death[i]}</td>
                </tr>
            )
        }
        return res;
    }


    getHead() {
        let res = [];

        for (var i = 0; i < columnHeader.length; i++) {
            res.push(<th id={columnHeader[i]}>{columnHeader[i]}</th>)
        }
        return res

    }


    render() {
        const { totalCases, activeCases, noOfIndianNationalCase, noOfForeignNationalCase, totalCuredCase, totalDeath, dateOfUpdate, timeOfUpdate } = this.state
                     
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card text-center shadow">
                            <div className="card-body text-dark">
                                <h4 className="card-title">IND Statistics</h4>
                                <p style={{ fontsize: 20 }} className="card-text text-secondary" >Total Cases : {totalCases} </p>
                                <p className="card-text text-secondary">Date Of Update : {dateOfUpdate}</p>
                                <p className="card-text text-secondary">Time Of Update: {timeOfUpdate}</p>
                                <p className="card-text text-secondary">No Of Indian Cases: {noOfIndianNationalCase}</p>
                                <p className="card-text text-secondary">No Of Foreign Cases: {noOfForeignNationalCase}</p>
                                <p className="card-text text-secondary">No Of Cured Cases: {totalCuredCase}</p>
                                <p className="card-text text-secondary">No Of Deaths: {totalDeath}</p>
                               
                               <div className="center">
                                <table>
                                    <thead>
                                        <tr>{this.getHead()}</tr>
                                    </thead>
                                    <tbody>
                                        {this.getTableData()}
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default IndStats;
