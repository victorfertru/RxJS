import { first, fromEvent, map, take, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  //   .pipe(take(1))
  .pipe(
    //  tap(() => console.log("tap")),
    tap<PointerEvent>(console.log),
    //   map( event => ({clientY: event.clientY, clientX: event.clientX}))
    map(({ clientX, clientY }) => ({ clientY, clientX })),
    first((event) => event.clientY >= 150)
    //   first<PointerEvent>((event) => event.clientY >= 150)
  )

  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
