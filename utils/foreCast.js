const request = require('request')

const forecast = (latitude,longitude, callback) => {
  
    const url = "http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=" +latitude+','+longitude

        request({ url: url, json: true }, (error, {body}) => {
            if(error){
                callback('unable to connect to the forecast', undefined);
            }else if(body.error){
                callback('unable to locate weather condition services', undefined);
            }else{
                callback(undefined, {
                    description: body.current.weather_descriptions[0],
                    temperature: body.current.temperature
                });
            }
        })
}

module.exports = {
    foreCast: forecast
}