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
<<<<<<< HEAD
               }
            }  
                filmsToSearch='';                
               for (let i = 6;  i< 12; i++) {
                if (search.length > 1) {
                  console.log(search.length)  
                if(movies[i].poster_path!=null){
                filmsToSearch += `<img src="${urlImagen}${movies[i].poster_path}">
                <p class="title">${movies[i].title}</p>`;
                    document.getElementById('Second').innerHTML = filmsToSearch;
                    
                   }      
                  }
                  }
                   filmsToSearch='';                
                   for (let i = 12;  i< 19; i++) {
                    if (search.length > 1) 
                    if(movies[i].poster_path!=null){
                    filmsToSearch += `<img src="${urlImagen}${movies[i].poster_path}">
=======
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
>>>>>>> main
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


// sort
// for (let i = 0; i < movies.length; i++) {
//     for (let j = i; j < movies.length-1; j++)
//        {if (movies[i].popularity < movies[j])
//         temp=movies[i].popularity;
//         movies[i].popularity=movies[j].popularity;
//         movies[j].popularity=temp;
//        }
//     }
//     for (let i = 0; i < movies.length; i++)                    
//        { console.log(movies[i].popularity);}
// function sort_rated(){
//     axios({
//         method: 'GET',
//         url: `https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&vi&language=es-ES&query=${search}}`
//     }).then(res => {
//         let movies = res.data.results;
//         movies= movies.vote_average;
//         for (let i = 0;  i< movies.length; i++) {

//             search_Rated += `<p>${movies[i].vote_average}</p>`;

//         }
//         document.getElementById('overview').innerHTML = search_Rated;
//     })

// }
