const axios = require('axios')
const cheerio = require('cheerio')

worldStats = () => {
    const URL = 'https://www.worldometers.info/coronavirus/';
    axios.get(URL)
        .then((response) => {
            if (response.status === 200) {
                const $ = cheerio.load(response.data);
                let res = {};
                const numbers = $('.maincounter-number')
                    .text()
                    .trim()
                    .split(' ');
                res = {
                    TotalCases: numbers[0],
                    Deaths: numbers[3],
                    Recovered: numbers[5]
                }
                console.log(res);
            } else {
                console.error('Failed to load');
            }
        }, (err) => console.error(err));

}

helpLine = () => {
    const text = 'States \t\t Contact no\nKarnataka \t 104\nAndhra Pradesh \t 0866-2410978 \
    \nTamil Nadu \t 044-29510500\nKerala \t\t 0471-2552056'
    console.log(text);
}


advice = () => {
    const text = '*) Avoid close contact with people who are sick. Maintain at least three feet distance between yourself and anyone who is coughing or sneezing. \
    \n*) Avoid touching your eyes, nose, and mouth. \
    \n*) Wash your hands often with soap and water for at least 20 seconds, especially after going to the bathroom, before eating, and after blowing your nose, coughing, or sneezing. \
    \n*) If soap and water are not readily available, use an alcohol-based hand sanitiser with at least 60% alcohol. Always wash hands with soap and water when hands are visibly dirty. \
    \n*) If you have a fever, cough and difficulty breathing, seek medical attention immediately.'
    console.log(text);
}

indStats = () => {
    const URL = 'https://www.mohfw.gov.in/';
    axios.get(URL)
        .then((response) => {
            if (response.status === 200) {
                let res = {};
                const $ = cheerio.load(response.data);
                let rawData = $('li:nth-child(2)').text().split("\t");
                //console.log(rawData)
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
                res = {
                    NoOfPeopeleAffected: countAffected[3],
                    DateOfUpdate: latestUpdate[5],
                    timeOfUpdate: time,
                }
                console.log(res)
            } else {
                console.error('Failed to load');
            }
        }, (err) => console.error(err));

}

args = process.argv.slice(2)
switch (args[0]) {
    case '1':
        worldStats();
        break;
    case '2':
        helpLine()
        break;
    case '3':
        advice()
        break;
    case '4':
        indStats()
        break;
}
