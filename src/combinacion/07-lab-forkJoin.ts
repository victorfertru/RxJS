// el uso más común del forkjoin es realizar peticiones ajax de manera simultanea

import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUB_API_URL = "https://api.github.com/users";
const GITHUB_USER = "victorfertru";

forkJoin({
  usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/reposa`).pipe(
    // 2 - podríamos poner un catchError aquí y devolver un [] vacío, así el resto de datos los podríamos ver
    // y de esta forma controlar errores de forma independiente
    catchError((err) => of([]))
  ),
  gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
})
  // 1 - podemos capturar el error con un pipe, pero no tendríamos la información del resto de peticiones.
  .pipe(catchError((err) => of(err)))
  .subscribe(console.log);
