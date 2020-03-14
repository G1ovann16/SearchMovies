const urlImagen = 'https://image.tmdb.org/t/p/w200';
const button = document.getElementById("btn");


function buscar(){
    let count =0;
    let filmsToSearch= "";
    let k = 0;
    let overView = "";
    let rated=0;
    let temp;

    let search = document.getElementById("query").value;
    if(search.length === 0)
    document.getElementById('titulo').innerHTML = '';
    axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&vi&language=es-ES&query=${search}}`
    }).then(res => {
        let movies = res.data.results;
        for (let i = 0;  i< 6; i++) {
         if(movies[i].poster_path!=null){
            filmsToSearch += `<img src="${urlImagen}${movies[i].poster_path}">
            <p class="title">${movies[i].title}</p>
            <div class="row">
            <div class="col">
              <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div class="card card-body" >
                ${movies[i].overview}
                </div>
              </div>
            </div>
          </div>`;
            document.getElementById('First').innerHTML = filmsToSearch;
               }
            }  
                filmsToSearch='';                
               for (let i = 6;  i< 12; i++) {
                if(movies[i].poster_path!=null){
                filmsToSearch += `<img src="${urlImagen}${movies[i].poster_path}">
                <p class="title">${movies[i].title}</p>`;
                    document.getElementById('Second').innerHTML = filmsToSearch;
                    
                   }      
                }
                   filmsToSearch='';                
                   for (let i = 12;  i< 19; i++) {
                    if(movies[i].poster_path!=null){
                    filmsToSearch += `<img src="${urlImagen}${movies[i].poster_path}">
                    <p class="title">${movies[i].title}</p>`;
                        document.getElementById('Third').innerHTML = filmsToSearch;
                        
                       }      
                   }
                   
                })
}


