const apiKey = '467143a2e9e1de3de89328bf80dd0625'
const adress = 'https://api.openweathermap.org/data/2.5/'

const btn = document.getElementById('btn')
const cityName = document.getElementById('city-name')
const gradus = document.getElementById('gradus')
const about = document.getElementById('about')
const inputSearch = document.getElementById('input-search')
const searchIcon = document.getElementById('icon')

btn.addEventListener('keypress', getCityWeather)
searchIcon.addEventListener('click', () => {
  getResult(inputSearch.value)
})

function getCityWeather(e) {
  if (e.keyCode == 13) {
    getResult(inputSearch.value)
  }
}


function getResult(e) {

  fetch(`${adress}weather?q=${inputSearch.value}&units=metric&appid=${apiKey}`).then(function (weather) {
    return weather.json()
  }).then(getReuslt)

  function getReuslt(data) {
    showResult(data)
  }
}

function showResult(info) {
  cityName.textContent = `${info.name}, ${info.sys.country}`
  gradus.textContent = `${Math.round(info.main.temp)}°C`
  about.textContent = `${info.weather[0].main}`
}