import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

//fecha de hoy pero incrementado  5 segundos
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

// Interval & timer son asíncronos
const interval$ = interval(1000);

// const timer$ = timer(2000);

// con esta instrucción creamos un "interval" que inicia en 2segundos (no se completa)
// const timer$ = timer(2000, 1000);

// aunque indicemos 0segundos, no es "instantáneo", es tan pronto como JS y su stacks de callbacks lo permitan
// const timer$ = timer(0);

// Programar cuándo queremos una emisión de nuestro observable
const timer$ = timer(hoyEn5);

console.log("Inicio");
// de momento no se llega a completar
interval$.subscribe(observer);
console.log("Fin");

console.log("Inicio");
timer$.subscribe(observer);
console.log("Fin");
