const image = document.querySelector("figure")
const input = document.querySelector("#search")
const searchButton = document.getElementById("search-button")
const NAME = document.getElementById("input")
const URL = "https://superheroapi.com/api.php/10223569763528853"
const intelligence = document.getElementById("intelligence")
const power = document.getElementById("power")
const strength = document.getElementById("strength")
const combat = document.getElementById("combat")
const speed = document.getElementById("speed")
const durability = document.getElementById("durability")
const caption = document.querySelector("figcaption")
const randomButton = document.getElementById("random-button")

const search = (name) => {
        fetch(`${URL}/search/${name}`)
                .then(response => response.json())
                .then(json => {
                        image.innerHTML = `<img src="${json.results[0].image.url}">`, power.innerHTML = json.results[0].powerstats.power,
                                intelligence.innerHTML = json.results[0].powerstats.intelligence,
                                strength.innerHTML = json.results[0].powerstats.strength,
                                combat.innerHTML = json.results[0].powerstats.combat,
                                speed.innerHTML = json.results[0].powerstats.speed,
                                durability.innerHTML = json.results[0].powerstats.durability,
                                caption.innerHTML = json.results[0].name
                })
}

searchButton.onclick = () => search(input.value)

const random = () => {
        const number =()=>{
                return Math.ceil(Math.random() * 731)
         }
        fetch(`${URL}/${number()}`)
                .then(response => response.json())
                .then(json => {       
                        image.innerHTML = `<img src="${json.image.url}">`, power.innerHTML = json.powerstats.power,
                                intelligence.innerHTML = json.powerstats.intelligence,
                                strength.innerHTML = json.powerstats.strength,
                                combat.innerHTML = json.powerstats.combat,
                                speed.innerHTML = json.powerstats.speed,
                                durability.innerHTML = json.powerstats.durability,
                                caption.innerHTML = json.name
                                
                })
}

randomButton.onclick = () => random()                