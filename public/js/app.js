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
                paragraphTwo.textContent = 'Forecast: ' + data.forecast
            }
        })
    })

    console.log(searchBox.value)
})