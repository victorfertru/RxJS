import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";

// Lo añade a la cola, y lo concatena cuando termina el observable que estaba activo.
// NO lo ejecuta hasta que el anterior observable esté completo

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");

// click$.pipe(switchMap(() => interval$)).subscribe(console.log);
click$.pipe(concatMap(() => interval$)).subscribe(console.log);
