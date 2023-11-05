TAREAS 
1. Crar una apliccion en rect 
2. Implementar APIFetch para busqueda de peliculas, series, actores, entre otros 
3. Implementar paginacion, diseño y busquedas

RECURSOS:
API para cargar peliculas más populares en orden descendiente 
- https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aeee8a531e2a4b2fc0b4a86aaf3bdd3a&page=1
otro posible url que funciona mejor y con descripciones en español es 
- https://api.themoviedb.org/3/movie/popular?language=es-CO.desc&api_key=aeee8a531e2a4b2fc0b4a86aaf3bdd3a&page=1

API para realizar busquedas de peliculas, series o actores es 
- https://api.themoviedb.org/3/search/movie?query={query}&api_key=aeee8a531e2a4b2fc0b4a86aaf3bdd3a

API para obtener informacion detallada de la consulta es:
- https://api.themoviedb.org/3/movie/{idQuery}?api_key=aeee8a531e2a4b2fc0b4a86aaf3bdd3a

API para obtener la imagen correctamente 
- https://image.tmdb.org/t/p/original{url_img}