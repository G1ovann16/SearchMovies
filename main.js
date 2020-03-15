const urlImagen = 'https://image.tmdb.org/t/p/w200';
const button = document.getElementById("btn");
let count = 5;

function changeBackground() {
  let num = Math.ceil(Math.random() * count);
  console.log(num);
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
    for (let i = 0; i < 6; i++) {
      if (search.length > 1){
        if (movies[i].poster_path != null) {
          filmsToSearch += `<img src="${urlImagen}${movies[i].poster_path}">
            <p class="title">${movies[i].title}</p>
            <div class="card card-body" > ${movies[i].overview} </div>`;
          document.body.style.background="#000";
          document.getElementById('carouselExampleIndicators').style.display= "none" ;
          ;
            document.getElementById('First').innerHTML = filmsToSearch;
        }
    }else{
      document.getElementById('carouselExampleIndicators').style.display= "block" ;
    }
   
  }


    filmsToSearch = '';
    for (let i = 6; i < 12; i++) {
      if (search.length > 1){
        if (movies[i].poster_path != null) {
          filmsToSearch += `<img src="${urlImagen}${movies[i].poster_path}">
                <p class="title">${movies[i].title}</p>`;
           document.body.style.background="#000";
          document.getElementById('carouselExampleIndicators').style.display= "none" ;
          document.getElementById('Second').innerHTML = filmsToSearch;

        }
      }else{
        document.getElementById('carouselExampleIndicators').style.display= "block" ;
      }

      }
    filmsToSearch = '';
    for (let i = 12; i < 19; i++) {
      if (search.length > 1){
        if (movies[i].poster_path != null) {
          filmsToSearch += `<img src="${urlImagen}${movies[i].poster_path}">
                    <p class="title">${movies[i].title}</p>`;
           document.body.style.background="#000";
          document.getElementById('carouselExampleIndicators').style.display= "none" ;
          document.getElementById('Third').innerHTML = filmsToSearch;

        }
    }
  else{
    document.getElementById('carouselExampleIndicators').style.display= "block" ;
    }
    }
  })
}


