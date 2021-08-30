import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// No es recomendable hacer este cálculo en todas las suscripciones
// range(1, 5).subscribe((val) => console.log(val * 10));

range(1, 5)
  .pipe(map<number, number>((val) => val * 10))
  .subscribe(console.log);

range(1, 5)
  .pipe(map<number, string>((val) => (val * 10).toString()))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

// MAP
const keyupCode$ = keyup$.pipe(map((event) => event.code));

// PLUCK
// const keyupPluck$ = keyup$.pipe(pluck("key"));
// Sacando información de objetos anidados
const keyupPluck$ = keyup$.pipe(pluck("target", "baseURI"));

// MAPTO
const keyupMapTo$ = keyup$.pipe(mapTo("Tecla presionada"));

// Para devolver directamente la tecla pulsada sin tener que ir nombrando la propiedad, lo pasamos por un map
keyup$.subscribe(console.log);
keyupCode$.subscribe((code) => console.log("map", code));
keyupPluck$.subscribe((code) => console.log("pluck", code));
keyupMapTo$.subscribe((code) => console.log("mapTo", code));
