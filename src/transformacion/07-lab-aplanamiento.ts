import {
  catchError,
  exhaustMap,
  fromEvent,
  map,
  mergeMap,
  of,
  pluck,
  switchMap,
  tap,
} from "rxjs";
import { ajax } from "rxjs/ajax";

// helpers
const peticionHttpLogin = (userPass) =>
  ajax.post("https://reqres.in/api/login?delay=1", userPass).pipe(
    pluck("response", "token"),
    catchError((err) => of("xxx"))
  );

// creando un formulario
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const submitBtn = document.createElement("button");

// configuraciones
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";
inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.value = "cityslicka";

submitBtn.innerText = "Ingresar";

form.append(inputEmail, inputPass, submitBtn);
document.querySelector("body").append(form);

// Streams
const submitForm$ = fromEvent(form, "submit").pipe(
  tap((ev) => ev.preventDefault()),
  map((ev) => ({
    email: ev.target[0].value,
    password: ev.target[1].value,
  })),
  // mergeMap (userPass => peticionHttpLogin(userPass))
  // mergeMap(peticionHttpLogin) // se generan todas las peticiones.
  // switchMap(peticionHttpLogin) // Cancela las peticiones pendientes y solo regresa la última
  exhaustMap(peticionHttpLogin) // Ignora todas las peticiones mientras haya una que no está completada
);

submitForm$.subscribe((token) => {
  console.log(token);
});
