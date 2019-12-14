const request = require('request')

const forecast = ( latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/708da0eac04dadcafda9d8f78ccfab37/'+latitude+','+ longitude +'?units=si'
    
    request({ url, json:true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            temperatureMax = body.daily.data[0].temperatureHigh
            temperatureMin = body.daily.data[0].temperatureLow
            callback(undefined, body.daily.data[0].summary+ '. It is '+ body.currently.temperature+' degrees out with a '+body.currently.precipProbability+'% chance of rain.',temperatureMax, temperatureMin )
        }
    })
}

module.exports = forecast