import { map, pluck, catchError } from "rxjs/operators";
import { ajax, AjaxError } from "rxjs/ajax";
import { of } from "rxjs";

const url = "https://api.github.com/users?per_page=5";
// const url = "https://api.github.com/usersXXX?per_page=5";

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};

const atrapaError = (err: AjaxError) => {
  console.warn("error en:", err.message);
  return of({});
};

const fetchPromesa = fetch(url);

// FETCH
fetchPromesa
  .then(manejaErrores) // como primer argumento sería el response, que es lo que recibe la función
  .then((resp) => resp.json()) // la información viene en el body, como "readableStream"
  .then((data) => console.log("data", data))
  .catch((err) => console.warn("error en usuarios", err));

//AJAX
ajax(url)
  .pipe(
    // map((resp) => resp.response),
    pluck("response"),
    catchError(atrapaError)
  )
  .subscribe((users) => console.log("usuarios", users));
