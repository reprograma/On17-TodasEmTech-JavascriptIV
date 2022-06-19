const main = document.getElementById('main');
const blocklist = ['id', 'people', 'species', 'location', 'vehicles', 'url', 'locations' , 'movie_banner', 'image']

function showFilm(film){
    console.log(film);
    let card = document.createElement('article');
    Object.entries(film).forEach(attr => {
        key = attr[0];
        value = attr[1];
        if(blocklist.includes(key)) return;
        let h5 = document.createElement('h5');
        h5.textContent = key + ': ';
        let p = document.createElement('p');
        p.textContent = value;
        let div = document.createElement('div');
        div.setAttribute('class' , 'filmProperty');
        div.append(h5);
        div.append(p);
        card.append(div);

    })
    main.append(card);

}

function showFilms(data) {
    data.forEach(element => {
        showFilm(element);
    });
}

async function getFilms() {

    let data = await fetch('https://ghibliapi.herokuapp.com/films');
    data = await data.json();
    showFilms(data);
}

getFilms();
