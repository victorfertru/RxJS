import { concat, interval, of, take } from "rxjs";

// hasta que no finaliza el primer observable, no pasa al siguiente.
// Si éste no se completa nunca, el resto de observables no se ejecutarán
const interval$ = interval(1000);
concat(interval$.pipe(take(3)), interval$.pipe(take(2)), of(1)).subscribe(
  console.log
);
