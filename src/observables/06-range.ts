import { asyncScheduler, of, range } from "rxjs";

// const src$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// posicion inicial, número de emisiones
const src$ = range(1, 10, asyncScheduler); // convertirla a asíncrona
// const src$ = range(-5, 10);
// const src$ = range(5);

// síncrono
console.log("inicio");
src$.subscribe(console.log);
console.log("fin");
