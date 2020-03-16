import React, { Component } from 'react';
import Card from './cards';
import Card2 from './cards2';
import Card3 from './cards3';
import Card4 from './card4';

class Cards extends Component {

    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-12">
                        <Card title="World Stats" text1="TotalCases: 179,221" text2="Deaths: 7,066" text3="Recovered: 78,285"/>
                        <Card2 title="India Stats"/>
                        <Card3 title="Advice"/>
                        <Card4 title="Helpline"/>
                    </div>

                </div>
            </div>
        );
    }
}
export default Cards;
