import { fromEvent, interval, mergeMap, switchMap } from "rxjs";

const click$ = fromEvent(document, "click");
const interval$ = interval(1000);

// emite los valores nada más dar click
click$.pipe().subscribe(console.log);

// MergeMap - Mantiene todas las suscripciones activas simultaneamente
// cuando hago click, se empiezan a emitir valores y se genera el intervalo.
// cuando hago otro click, se mezclan los valores de los distintos clicks.
// Esto puede generar un problema de memoria.
// click$.pipe(mergeMap(() => interval$)).subscribe(console.log);

// SwitchMap - Mantiene sólo una (la última) suscripción activa.
click$.pipe(switchMap(() => interval$)).subscribe(console.log);
