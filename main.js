const urlImagen = 'https://image.tmdb.org/t/p/w200';
const button = document.getElementById("btn");
let count = 5;

function changeBackground() {
  let num = Math.ceil(Math.random() * count);
  document.body.background = 'imag/' + num + '.jpg';
  document.body.style.backgroundRepeat = "repeat";
}

function buscar() {
  let filmsToSearch = "";
  let overView = "";
  let rated = 0;
  let temp;

  let search = document.getElementById("query").value;
  if (search.length <= 0) {
    document.getElementById('First').innerHTML = '';
    document.getElementById('Second').innerHTML = '';
    document.getElementById('Third').innerHTML = '';
  } axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&vi&language=es-ES&query=${search}}`
  }).then(res => {
    let movies = res.data.results;
    if (search.length > 1 ){
    for (let i = 0; i < 10; i++) {
        if (movies[i].poster_path != null) {
          console.log(movies[i].overview);
          if (movies[i].overview == "") {
            filmsToSearch += `<img class="post" src="${urlImagen}${movies[i].poster_path}">
            <p class="title">${movies[i].title}</p>
            <div class="card card-body">Overview not avalible, I'm sorry</div>`}
          else {
            filmsToSearch += `<img class="post" src="${urlImagen}${movies[i].poster_path}">
                    <p class="title">${movies[i].title}</p>
                    <div class="card card-body"> ${movies[i].overview} </div>`;
          }
          document.body.style.background = "#000";
          document.getElementById('carouselExampleIndicators').style.display = "none";
          document.getElementById('First').innerHTML = filmsToSearch;}
       else {
        document.getElementById('carouselExampleIndicators').style.display = "block";
      }
    }
    }
  

    filmsToSearch = '';
    for (let i = 10; i < 19; i++) {
      if (search.length > 1) {
        if (movies[i].poster_path != null) {
          if (movies[i].overview == null) {
            console.log("234");
            filmsToSearch += `<img class="post" src="${urlImagen}${movies[i].poster_path}">
            <p class="title">${movies[i].title}</p>
            <div class="card card-body">Overview not avalible, I'm sorry</div>`}
          else {
            filmsToSearch += `<img class="post" src="${urlImagen}${movies[i].poster_path}">
                    <p class="title">${movies[i].title}</p>
                    <div class="card card-body"> ${movies[i].overview}</div>`;
          }
          document.body.style.background = "#000";
          document.getElementById('carouselExampleIndicators').style.display = "none";
          document.getElementById('Second').innerHTML = filmsToSearch;

        }
      } else {
        document.getElementById('carouselExampleIndicators').style.display = "block";
      }

    }

  })
}


