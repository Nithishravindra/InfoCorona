"use strict"

const axios = require('axios');
const cheerio = require('cheerio');
const cheerioTableparser = require('cheerio-tableparser');
const express = require('express');
const app = express();

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
                let output = {};
                const $ = cheerio.load(response.data);
                let rawData = $('li:nth-child(2)').text().split("\t");
                let countAffected = rawData[1]
                    .trim()
                    .split(' ');
                let latestUpdate = rawData[14]
                    .trim()
                    .split(' ');
                let units;
                if (latestUpdate[8].includes('AM')) {
                    units = 'AM';
                } else {
                    units = 'PM';
                }
                let time = latestUpdate[7] + " " + units;


                cheerioTableparser($)
                let table = $('#content').parsetable(false, false, false);

                let rawCases = table[2][table[2].length - 1] + table[3][table[2].length - 1] + table[4][table[2].length - 1] + table[5][table[2].length - 1]
                let tot = rawCases.trim().split('>')
                let tot1 = parseInt(tot[1].match(/\d+/g))
                let tot2 = parseInt(tot[3].match(/\d+/g))
                let curedTot = parseInt(tot[5].match(/\d+/g))
                let deathTot = parseInt(tot[7].match(/\d+/g))


                let state = [];
                let indCase = [];
                let forCase = [];
                let cured = [];
                let death = [];

                for (let i = 1; i < table[1].length; i++) {
                    state[i - 1] = table[1][i];
                    indCase[i - 1] = table[2][i]
                    forCase[i - 1] = table[3][i]
                    cured[i - 1] = table[4][i]
                    death[i - 1] = table[5][i]
                }

                output = {
                    "NoOfPeopeleAffected": countAffected[3],
                    "DateOfUpdate": latestUpdate[5],
                    "TimeOfUpdate": time,
                    "NoOfIndianCase": tot1,
                    "NoOfForeignCase": tot2,
                    "NoOfCuredCase": curedTot,
                    "NoOfDeath": deathTot,
                    "States": state,
                    "TotalIndianNationalCases": indCase,
                    "TotalForeignNationalCases": forCase,
                    "CuredCases": cured,
                    "DeathCases": death
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