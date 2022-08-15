const APIURL = "https://api.thedogapi.com/v1/breeds/?api_key=461e06fd-c361-4327-ba81-bee2f3a34c31";
const SEARCHAPI = "https://api.thedogapi.com/v1/breeds/search?api_key=461e06fd-c361-4327-ba81-bee2f3a34c31&q=";
const IMGPATH = "https://api.thedogapi.com/v1/images/search/?api_key=461e06fd-c361-4327-ba81-bee2f3a34c31&breed_id="
const img2 = "https://cdn2.thedogapi.com/images/";
const GIFPATH = "https://api.thedogapi.com/v1/images/search/?api_key=461e06fd-c361-4327-ba81-bee2f3a34c31&mime_types=gif"



const formEL = document.querySelector("#form")
const searchEL = document.querySelector("#search")
const mainEL = document.querySelector("#main")

async function getDogs(url){

    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData)
    createCards(respData);
}

function createCards(dogs){
    mainEL.innerHTML = "";
 
    console.log(dogs)
  dogs.forEach((dog) => {
        const {name, life_span,temperament,weight,height, reference_image_id} = dog;
        const dogCardEl = document.createElement("div");
        dogCardEl.classList.add("dog");
        
        const imagem = img2 + reference_image_id + '.jpg'
        dogCardEl.innerHTML = `
       <img class = "imgResult" id="imgResult" src="${imagem}" onerror="this.src='img/img-error.png'">
        <div class="dog-info">
        <h3>Raça: ${name} </h3>
        <h3>Tempo de vida: ${life_span}</h3>
        <h3>Temperamento: ${temperament}</h3>
        <h3>Peso: ${weight.metric}kg</h3>
        <h3>Altura: ${height.metric}cm</h3>
        </div>
        `
        mainEL.appendChild(dogCardEl);
       
    })
}

searchEL.addEventListener("keyup", () => {
    getDogs(SEARCHAPI + searchEL.value);
})

const buttonEL = document.getElementById('button')

buttonEL.addEventListener("click", function (gif) {
    gif.preventDefault();

let GIFPATH = "https://api.thedogapi.com/v1/images/search/?api_key=461e06fd-c361-4327-ba81-bee2f3a34c31&mime_types=gif"

fetch(GIFPATH).then((Response) => Response.json()).then(function (data){
    console.log(data.map(typeinfo => typeinfo.url))

   window.open(data.map(typeinfo => typeinfo.url))

})

} )