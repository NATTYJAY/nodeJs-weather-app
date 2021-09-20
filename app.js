
const codeGeo = require('./utils/geoCode');
const castFore = require('./utils/foreCast');

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    codeGeo.geoCode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }
        
        castFore.foreCast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}


