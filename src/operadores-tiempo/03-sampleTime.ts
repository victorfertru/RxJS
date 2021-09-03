import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    sampleTime(2000), // más eficiente primero el sampleTime, ya que ahorramos cálculos y procesamiento de información
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);
