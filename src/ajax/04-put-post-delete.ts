import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

// ajax
//   .post(
//     url,
//     {
//       id: 1,
//       nombre: "Agustín",
//     },
//     { "mi-token": "ABC123" }
//   )
//   .subscribe(console.log);

// ajax
//   .put(
//     url,
//     {
//       id: 1,
//       nombre: "Agustín",
//     },
//     { "mi-token": "ABC123" }
//   )
//   .subscribe(console.log);

// Tenemos que eliminar el objeto con datos para poder hacer la petición delete.
// ajax.delete(url, { "mi-token": "ABC123" }).subscribe(console.log);

// Podríamos hacer peticiones POST, PUT & DELETE de esta forma sin tener errores
ajax({
  url: url,
  method: "DELETE",
  headers: { "mi-token": "ABC123" },
  body: { id: 1, nombre: "Agustín" },
}).subscribe(console.log);
