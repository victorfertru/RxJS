import { exhaustMap, fromEvent, interval, take } from "rxjs";

// Si hay una suscripción interna activa, ignora si le llega una nueva
// Cuando se haya completado la suscripción, si recibe una nueva suscripción
// la procesaría.

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");

click$.pipe(exhaustMap(() => interval$)).subscribe(console.log);

// es útil cuando tenemos elementos u observables que emiten muchos valores y que podemos ignorar
// por ejemplo: un botón y la persona pulsa muchas veces un botón, o un formulario y presionan la tecla enter
// muchas veces emitiendo muchas peticiones submit.
