import { fromEvent, Observable } from "rxjs";
import {
  debounceTime,
  map,
  pluck,
  mergeAll,
  mergeMap,
  switchMap,
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";

// referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
  console.log(usuarios);
  orderList.innerHTML = "";

  for (const usuario of usuarios) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = usuario.avatar_url;

    const anchor = document.createElement("a");
    anchor.href = usuario.html_url;
    anchor.text = "Ver página";
    anchor.target = "_blank";

    li.append(img);
    li.append(usuario.login + " ");
    li.append(anchor);

    orderList.append(li);
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$.pipe(
  debounceTime<KeyboardEvent>(500), // esperar 500ms antes de continuar
  //  pluck<KeyboardEvent, string>("target", "value"), // extraer el value del KeyboardEvent
  map<KeyboardEvent, string>((evento) => evento.target["value"]),
  mergeMap<string, Observable<GithubUsersResp>>(
    (
      texto // convertir el value en una request ajax y que devuelve un observable
    ) => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
  ),
  //  pluck<any,GithubUser[]>("items") // se extraen los "items"
  map<any, GithubUser[]>((item) => item.items)
);
// .subscribe(mostrarUsuarios);

const url = "https://httpbin.org/delay/1?arg=";

// no ponemos debounceTime, por lo que al pulsar una tecla, se va a lanzar una petición.
// El mergeMap se suscribe a tantos observables esto emita o reciba, por lo que se generan muchas peticiones basura
// peticiones que no nos interesan en la mayoría de casos
input$
  .pipe(
    map<KeyboardEvent, string>((evento) => evento.target["value"]),
    mergeMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);

/// SWITCHMAP - Cancela las peticiones anteriores y solo deja la última
input$
  .pipe(
    map<KeyboardEvent, string>((evento) => evento.target["value"]),
    switchMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);
