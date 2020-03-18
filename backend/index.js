"use strict"

const axios = require('axios');
const cheerio = require('cheerio');
const cheerioTableparser = require('cheerio-tableparser');
const express = require('express');
const app = express();
const cors = require('cors')


app.use(cors())

app.get('/worldStats', (req, res) => {
    const URL = 'https://www.worldometers.info/coronavirus/';
    axios.get(URL)
        .then((response) => {
            if (response.status === 200) {
                const $ = cheerio.load(response.data);
                let output = {};
                const numbers = $('.maincounter-number')
                    .text()
                    .trim()
                    .split(' ');
                output = {
                    TotalCases: numbers[0],
                    Deaths: numbers[3],
                    Recovered: numbers[5]
                }
                res.status(200).send({
                    message: output
                })
            } else {
                console.error('Failed to load');
            }
        }, (err) => console.error(err));
})

app.get('/helpline', (req, res) => {
    let text = [
        {
            state: "karnataka",
            contactNo: "104"
        },
        {
            state: "Andhra Pradesh",
            contactNo: "0866-2410978"
        }, {
            state: "Tamil Nadu",
            contactNo: "044-29510500"
        }, {
            state: "Kerala ",
            contactNo: "0471-2552056'"
        }
    ]
    res.status(200).send({
        message: text
    })
})

app.get('/advice', (req, res) => {
    const text = '1. Avoid close contact with people who are sick. Maintain at least three feet distance between yourself and anyone who is coughing or sneezing. 2. Avoid touching your eyes, nose, and mouth. 3. Wash your hands often with soap and water for at least 20 seconds, especially after going to the bathroom, before eating, and after blowing your nose, coughing, or sneezing. 4. If soap and water are not readily available, use an alcohol-based hand sanitiser with at least 60% alcohol. Always wash hands with soap and water when hands are visibly dirty. 5. If you have a fever, cough and difficulty breathing, seek medical attention immediately.'
    res.status(200).send({
        message: text
    })
});

app.get('/indStats', (req, res) => {
    const URL = 'https://www.mohfw.gov.in/';
    axios.get(URL)
        .then((response) => {
            if (response.status === 200) {

                const $ = cheerio.load(response.data);
                let rawData = $('ol').text().split('\n');

                let temp = rawData[2].split(' ');

                const totalActiveCase = temp[temp.length - 1]
                temp = rawData[5].split(' ');

                const dateOfUpdate = temp[5];
                let units;
                if (temp[8].includes('AM')) {
                    units = 'AM';
                } else {
                    units = 'PM';
                }
                let time = temp[7] + " " + units;

                temp = rawData[3].split(' ');
                const totalCuredCase = temp[temp.length - 1];

                temp = rawData[4].split(' ');
                const totalDeath = temp[temp.length - 2];

                cheerioTableparser($)
                let table = $('body > div:nth-child(3) > div > div > div > ol > strong > strong > strong > div').parsetable(false, false, false);

                console.log(table)

                let rawCases = table[2][table[2].length - 1] + table[3][table[2].length - 1];
                let tot = rawCases.trim().split('>')
                let indanCaseConfirmed = parseInt(tot[1].match(/\d+/g))
                let foreignCaseConfirmed = parseInt(tot[3].match(/\d+/g))
                const totalNoOfCase = indanCaseConfirmed + foreignCaseConfirmed

                let state = [];
                let indCase = [];
                let forCase = [];
                let cured = [];
                let death = [];

                for (let i = 0; i < table[1].length - 2; i++) {
                    state[i] = table[1][i + 1];
                    indCase[i] = table[2][i + 1]
                    forCase[i] = table[3][i + 1]
                    cured[i] = table[4][i + 1]
                    death[i] = table[5][i + 1]
                }

                let output = {
                    "totalCases": totalNoOfCase,
                    "noOfIndianNationalCase": indanCaseConfirmed,
                    "noOfForeignNationalCase": foreignCaseConfirmed,
                    "activeCases": totalActiveCase,
                    "totalCuredCase": totalCuredCase,
                    "totalDeath": totalDeath,
                    "dateOfUpdate": dateOfUpdate,
                    "timeOfUpdate": time,
                    "states": state,
                    "TotalIndianNationalCases(states)": indCase,
                    "TotalForeignNationalCases(states)": forCase,
                    "CuredCases(states)": cured,
                    "DeathCases(states)": death
                }

                res.status(200).send({
                    message: output
                })

            } else {
                console.error('Failed to load');
            }
        }, (err) => console.error(err));
})

app.listen(3002, () => {
    console.log('Server running on port http://localhost:3002');
})