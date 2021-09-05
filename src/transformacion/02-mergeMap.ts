import { fromEvent, interval, of } from "rxjs";
import { mergeMap, take, map, takeUntil } from "rxjs/operators";

const letras$ = of("a", "b", "c");

letras$
  .pipe(
    mergeMap((letra) =>
      interval(1000).pipe(
        map((i) => letra + i),
        take(3)
      )
    )
  )

  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });

const mouseDown$ = fromEvent(document, "mousedown");
const mouseUp$ = fromEvent(document, "mouseup");
const interval$ = interval();

// quiero empezar a escuchar cuando se hace click.
mouseDown$
  .pipe(
    // llamamos al interval, para que empiece a contar el tiempo
    mergeMap(() =>
      interval$.pipe(
        // detener el intervalo cuando se haga mouseUp
        takeUntil(mouseUp$)
      )
    )
  )
  .subscribe(console.log);
