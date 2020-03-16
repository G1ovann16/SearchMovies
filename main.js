const urlImagen = 'https://image.tmdb.org/t/p/w200';
const button = document.getElementById("btn");
let count = 5;
let filmsToSearch = "";
let overView = "";
let rated = 0;
let temp;

function changeBackground() {
  let num = Math.ceil(Math.random() * count);
  document.body.background = 'imag/' + num + '.jpg';
  document.body.style.backgroundRepeat = "repeat";
}




function buscar() {
  let search = document.getElementById("query").value;  
  if (search.length <= 0) {
    document.getElementById('First').innerHTML = '';
    document.getElementById('Second').innerHTML = '';
  }

axios({
  method: 'GET',
  url: `https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&vi&language=es-ES&query=${search}}`
}).then(res => {
  let movies = res.data.results;

    if (search.length > 1 ){
      for (let i = 0; i < 10; i++) {
        if (movies[i].poster_path != null) {
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
    if (search.length > 1 ){
      for (let i = 10; i < 19; i++) {
          if (movies[i].poster_path != null) {
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
            document.getElementById('Second').innerHTML = filmsToSearch;}
         else {
          document.getElementById('carouselExampleIndicators').style.display = "block";
        }
      }
      }

      

    })
    
    
  }
  
  function sortPopularity(){
    filmsToSearch = '';
    let search = document.getElementById("query").value;
    document.getElementById('First').innerHTML = '';
    document.getElementById('Second').innerHTML = '';
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&vi&language=es-ES&query=${search}}`
    }).then(res => {
    let movies = res.data.results;
    let temp = 0;
    for (let i = 0; i < movies.length; i++) {
      for (let j = 0; j < movies.length-1; j++){
   
      if(movies[i].popularity > movies[j].popularity){
      temp= movies[i].popularity;
      movies[i].popularity=movies[j].popularity;
      movies[j].popularity=temp;
       }
     }
    }
     for (let i = 0; i < 10; i++) {
      if (movies[i].poster_path != null) {
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
  }    filmsToSearch = '';
     for (let i = 10; i < 19; i++) {
      if (movies[i].poster_path != null) {
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
        document.getElementById('Second').innerHTML = filmsToSearch;}
     else {
      document.getElementById('carouselExampleIndicators').style.display = "block";
    }
  }
    console.log(movies)
  })
}