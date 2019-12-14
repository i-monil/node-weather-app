const weatherForm = document.querySelector('form')
const searchBox = document.querySelector('#address')
const paragraphOne = document.querySelector('#para-1')
const paragraphTwo = document.querySelector('#para-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const url = '/weather?address=' + searchBox.value

    paragraphOne.style.display = 'block'
    paragraphOne.textContent = 'Loading...'
    paragraphTwo.textContent = ''
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                paragraphOne.textContent = data.error
            } else {
                paragraphTwo.style.display = 'block'
                paragraphOne.textContent = 'Location: ' + data.location
                paragraphTwo.innerHTML = 'Forecast: ' + data.forecast
                paragraphTwo.innerHTML = paragraphTwo.innerHTML + '<br>' + 'Max temperature: '+ data.temperatureMax
                paragraphTwo.innerHTML = paragraphTwo.innerHTML + '<br>' + 'Min temperature: '+ data.temperatureMin 
            }
        })
    })

    console.log(searchBox.value)
})