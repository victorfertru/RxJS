import { of, from } from "rxjs";

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable,
 */

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

// for (const id of miIterable) {
//   console.log(id);
// }

from(miIterable).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]);
// const source1$ = from("Víctor");
// const source2$ = of([1, 2, 3, 4, 5]);
// const source3$ = of(...[1, 2, 3, 4, 5]);

// source$.subscribe(observer);
// source1$.subscribe(observer);
// source2$.subscribe(observer);
// source3$.subscribe(observer);

// Las peticiones reactivas tienen ya una opción de generar peticiones ajax sin necesidad de usar fetch
const source$ = from(fetch("https://api.github.com/users/victorfertru"));

source$.subscribe(async (resp) => {
  console.log(resp);
  const dataResp = await resp.json();
  console.log(dataResp);
});

// source$.subscribe(observer);
