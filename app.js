const api_key = `dde669c54dbec53c562abad52d716702`;
const base_url = `https://api.openweathermap.org/data/2.5`;
const city_name = `Novi Pazar`;
let glavni = document.querySelector(".glavni");
const btn = document.querySelector(".btn");
let inp = document.querySelector(".input");
console.log(inp);
console.log(btn);

async function getData(city){
    const data = await fetch(`${base_url}/weather?q=${city}&appid=${api_key}&units=metric`);
    const response = await data.json();
    return response;
}

btn.addEventListener("click",()=>{
    getData(inp.value).then((res)=>{
        console.log(res);
        createCard(res.name,res.main,res);
    });
})


function createCard(name,main,pic){
    let card = document.createElement("div");
    card.className = "card";

    let ime =document.createElement("p");
    ime.innerHTML = "City/Town: " + name+"<br/>";

    let temperatura = document.createElement("p");
     temperatura.innerHTML = "Temperature: "+ main.temp+"</br>";

     let maksimalna = document.createElement("p");
     maksimalna = "Max. Temperature: "+ main.temp_max;

     let minimalna = document.createElement("p");
     minimalna.innerHTML = "Min. Temperature: "+ main.temp_min+"</br>";

     let humidalnost = document.createElement("p");
     humidalnost.innerHTML = "Humidity: "+ main.humidity + "</br>";
     
     let slika = document.createElement("img");
     slika.src =`http://openweathermap.org/img/w/${pic.weather[0].icon}.png`
    
     card.append(slika);
     card.append(ime);
     card.append(temperatura);
     card.append(maksimalna);
     card.append(minimalna);
     card.append(humidalnost);
     glavni.append(card);
}

