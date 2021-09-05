import { fromEvent, merge, pluck } from "rxjs";

// cuando ambos observables se completan, se completa la suscripción
const keyup$ = fromEvent(document, "keyup");
const click$ = fromEvent(document, "click");

// El orden de salida, es del primer operador que emite un valor.
// si los dos operadores emiten valores al mismo instante, sería
// el operador que está primero indicado (keyup)
merge(keyup$.pipe(pluck("type")), click$.pipe(pluck("type"))).subscribe(
  console.log
);
