
let ButtonNode = document.querySelector('button');
//const content = document.querySelector('div');

ButtonNode.addEventListener('click', async () => {

const InputNode = document.querySelector('input').value;

let pathfilms = 'https://api.themoviedb.org/3/search/movie?api_key=e52fa3c93e9c908cdac53a7d2997cec2&language=fr&query='+ InputNode;

let reponse = await fetch(pathfilms);
let films = await reponse.json();


films.results.forEach(element => {

//console.log(element.title);
//console.log(element.backdrop_path);
const ImgNode = document.createElement('img');
ImgNode.setAttribute('src', 'https://image.tmdb.org/t/p/w300'+ element.backdrop_path);
ImgNode.setAttribute('class', 'card-img-top rounded');
ImgNode.setAttribute('Style', 'width:18rem;');

const TitleNode = document.createElement('p');
TitleNode.textContent = element.title;
TitleNode.setAttribute('class','card-title text-primary');


const cardNode = document.createElement('div');
cardNode.setAttribute('class', 'card p-2 y-2 m-2 ');
cardNode.setAttribute('Style', 'width:18rem;');


const cardbody = document.createElement('div');
cardbody.setAttribute('class', 'card-body');

const rowl = document.querySelector('.row');



const DescriptionNode = document.createElement('p');
DescriptionNode.textContent = element.overview.substring(0, 50);
DescriptionNode.setAttribute('class','card-description');

cardbody.appendChild(TitleNode);
cardbody.appendChild(DescriptionNode);
cardNode.appendChild(ImgNode);
cardNode.appendChild(cardbody);
rowl.appendChild(cardNode);

    });

});


