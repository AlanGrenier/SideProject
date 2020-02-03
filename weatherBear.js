// requires discord.js
//const Discord = require("discord.js");

//const weatherBearClient = new Discord.Client();
const io = require('console-read-write');



async function main() {
    io.write('Please enter your zip code: ');
    zipCode = io.write(await io.read());

    if (zipCode === undefined || zipCode != 5 || parseInt(zipCode) === NaN) {
        message.channel.send("`Invalid Zip Code. Please follow the format: !weather <#####>`")
            .catch(console.error)
        return;
    } else {
        fetch('http://api.openweathermap.org/data/2.5/forecast?zip=$(zipCode),us&APPID=b18cd8cf1e464e33dc3cf53d59d0521b')
            .then(response => {
                return response.json()
            })
    }

}

main();



