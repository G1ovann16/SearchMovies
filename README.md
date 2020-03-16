
## Comenzando 🚀

_En este proyecto se consultará de una api, la cual contiene una base de datos de peliculas. El obetivo sería introducir el titulo o parte de la pelicula y se le mostrara la misma coon una imagen, el título y la sinopsis de la misma. si desea puede organizar su búsqueda en cuanto a popularidad._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Solo se necesitaría un dispositivo conectado a internet y que contenga una preferiblemnte mayor o igual a 4GB_

### Código a destacar
```if (movies[i].poster_path != null) {
        if (movies[i].overview == "") {
          filmsToSearch += `<img class="post" src="${urlImagen}${movies[i].poster_path}">
          <p class="title">${movies[i].title}</p>
          <div class="card card-body">Overview not avalible, I'm sorry</div>`
``` 
_En este código se consulta si tiene ovreview o no la película y se decide poner en caso de no tener un mensaje al usuario_

```
let movies = res.data.results;
    let temp = 0;
    for (let i = 0; i < movies.length; i++) {
      for (let j = 0; j < movies.length-1; j++)
```
_Aquí se hace un ordenamiento de las películas por popularidad_
### Instalación 🔧

_La instalacion de la misma es sencilla ya que se a desarrollado de forma portable, una vez tengas en tu dispositivo todos los archivos contenidos en la carpeta, estrías listo para su correcto funcionamiento._


_Lo copias todo en su destino y lanzas el archivo index.html_



### Y las pruebas de estilo de codificación ⌨️

_Al ser un progrma sencillo no consta de muchos juegos dedatos para pruebas de errores. Simplemente se paso a introducir texto variado, compuesto de números y/o caracteres, por lo que el diseño omite los caracteres que no necesite y solo se queda con lo que es productivo para su búsqueda_

```
+*eli = Sólo reconoce eli
```


## Construido con 🛠️


* [HTML] - Para la visualizacion del proyecto.
* [CSS] - PAra acomodar y darle el estilo necesario al proyecto.
* [JS] - Funciones y consulta a la appi de películas

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/G1ovann16/SearchMovies) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.


## Autores ✒️

* **Giovanni Landaburo Del Arco** - *Trabajo Inicial* - [glandaburo](https://github.com/G1ovann16)
