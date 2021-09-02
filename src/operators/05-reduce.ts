import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

const total = numbers.reduce(totalReducer, 0);

console.log("total arr", total);

interval(500)
  .pipe(
    // completa el observable después de la cantidad de veces que se especifique
    take(6),
    tap(console.log),
    reduce(totalReducer) // si necesitamos el valor acumulado en el momento de la emisión, tenemos que utilizar otro operadores
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
