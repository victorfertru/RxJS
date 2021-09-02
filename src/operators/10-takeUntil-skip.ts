import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

const boton = document.createElement("button");
boton.innerText = "Detener Timer";

document.querySelector("body").append(boton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent<PointerEvent>(boton, "click");
const clickBtn$ = fromEvent<PointerEvent>(boton, "click").pipe(
  tap(() => console.log("tap antes de skip")),
  skip(1), // veces que quiero saltarme las emisiones de este evento
  tap(() => console.log("tap después de skip"))
);

counter$
  .pipe(takeUntil(clickBtn$))

  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
