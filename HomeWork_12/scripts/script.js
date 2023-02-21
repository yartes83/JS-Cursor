const BASE_URL = 'https://swapi.dev/api';
const heroesContainer = document.querySelector('.heroesContainer');
const buttonGetInfo = document.querySelector('.getInfo');
const buttonPlanets = document.querySelector('.planets');

buttonGetInfo.addEventListener('click', getInfo);
buttonPlanets.addEventListener('click', getPlanets);

//----------------герої----------------------
async function getInfo() {
    heroesContainer.innerHTML = '';
        
    const films = await fetch (`${BASE_URL}/films`);
    const infoFromRequest = await films.json ();
    const characters = infoFromRequest.results[1].characters;
    
    
    characters.forEach (res);
}
let res = async function heroes(hero) {
    const hero1 = await fetch(`${hero}`);
    const info = await hero1.json();
    
    return renderHeroes(info)
}
function renderHeroes(hero) {
    const heroClass = document.createElement('div');
    heroClass.classList.add('hero');
    
    const heroName = document.createElement('h4');
    heroName.classList.add('heroName');
    heroName.textContent = hero.name;
    
    const heroBirthday = document.createElement('p');
    heroBirthday.classList.add('heroBirthdayData');
    heroBirthday.textContent = `рік народження: ${hero.birth_year}`;
    
    const heroGender = document.createElement('p');
    heroGender.classList.add('heroGender');
    heroGender.textContent = `стать: ${hero.gender}`;
    
    const imgHero = document.createElement('img');
    imgHero.classList.add('imageHero', `${(hero.name).replace(' ','')}`);
    
    heroClass.append(heroName, heroBirthday, heroGender, imgHero);
    
    heroesContainer.append(heroClass)
}
//----------------планети----------------------
async function getPlanets() {
    heroesContainer.innerHTML = '';
    const requestPlanets = await fetch(`${BASE_URL}/planets`);
    const resultRequestPlanets = await requestPlanets.json();
    const arrayOfPlanets = resultRequestPlanets.results;
    
    arrayOfPlanets.forEach(renderPlanet)
}
function renderPlanet(planet) {
    const planetClass = document.createElement('div');
    planetClass.classList.add(`planet`);
    
    const planetName = document.createElement('p');
    planetName.textContent = planet.name;
    
    const planetImg = document.createElement('img');
    planetImg.classList.add(`imagePlanet`, `${(planet.name).replace(' ','')}`);
    
    planetClass.append(planetName, planetImg);
    heroesContainer.append(planetClass);
}







