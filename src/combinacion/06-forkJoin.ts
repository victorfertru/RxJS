import {
  combineLatest,
  delay,
  forkJoin,
  fromEvent,
  interval,
  merge,
  of,
  pluck,
  take,
} from "rxjs";

const numeros$ = of(1, 2, 3, 4);
const intervalo$ = interval(1000).pipe(take(3)); // 0, 1, 2
const letras$ = of("a", "b", "c").pipe(delay(3500));

// devuelve un observable
// const obs4$ = forkJoin...
// forkJoin(numeros$, intervalo$, letras$).subscribe(console.log);

// forkJoin(numeros$, intervalo$, letras$).subscribe((resp) => {
//   console.log("numeros: ", resp[0]);
//   console.log("intervalo: ", resp[1]);
//   console.log("letras: ", resp[2]);
// });

forkJoin({ num: numeros$, int: intervalo$, let: letras$ }).subscribe((resp) =>
  console.log(resp)
);
