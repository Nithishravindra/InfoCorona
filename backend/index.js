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
                    .split('\n');
                output = {
                    TotalCases: numbers[0].trim(),
                    Deaths: numbers[3].trim(),
                    Recovered: numbers[5].trim()
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
            contactNo: "0471-2552056"
        }
    ]
    res.status(200).send({
        message: text
    })
})

app.get('/advice', (req, res) => {
    const text = [
        {
            advice:'1. Avoid close contact with people who are sick. Maintain at least three feet distance between yourself and anyone who is coughing or sneezing.'
        } , {
            advice:'2. Avoid touching your eyes, nose, and mouth.'
        } , {
            advice:'3. Wash your hands often with soap and water for at least 20 seconds, especially after going to the bathroom, before eating, and after blowing your nose, coughing, or sneezing.'
        } , {
            advice:'4. If soap and water are not readily available, use an alcohol-based hand sanitiser with at least 60% alcohol. Always wash hands with soap and water when hands are visibly dirty.'
        } , {
            advice:'5. If you have a fever, cough and difficulty breathing, seek medical attention immediately.'
        }
    ]
   
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
                let rawData = $('div.content.newtab > p').text();

                const totalActiveCase = $('div:nth-child(2) > div > span').text()
                let  temp = rawData.split(' ');
                
                const dateOfUpdate = temp[5];

                let units;
                if (temp[8].includes('AM')) {
                    units = 'AM';
                } else {
                    units = 'PM';
                }
                 let time = temp[7] + " " + units;
                 const totalCuredCase = $('div:nth-child(3) > div > span').text();
                 const totalDeath = $('div:nth-child(4) > div > span').text()

                cheerioTableparser($)
                
                let table = $('body > div.main-section > div > div > div.contribution > strong > div.content.newtab > div').parsetable(false, false, false);
            
                let indanCaseConfirmed = $('tr:nth-child(24) > td:nth-child(2) > strong').text();
                let foreignCaseConfirmed = $('tr:nth-child(24) > td:nth-child(3) > strong').text()
                                
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
                    "totalCases": totalActiveCase,
                    "noOfIndianNationalCase": indanCaseConfirmed,
                    "noOfForeignNationalCase": foreignCaseConfirmed,
                    "totalCuredCase": totalCuredCase,
                    "totalDeath": totalDeath,
                    "dateOfUpdate": dateOfUpdate,
                    "timeOfUpdate": time,
                    "states": state,
                    "TotalIndianNationalCaseslist": indCase,
                    "TotalForeignNationalCaseslist": forCase,
                    "CuredCaseslist": cured,
                    "DeathCaseslist": death
                }

                //console.log(output)

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

