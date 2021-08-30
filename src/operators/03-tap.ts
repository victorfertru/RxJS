import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numeros$ = range(1, 5);

// tap es bastante útil para depurar, porque podemos ver cómo va fluyendo la información
numeros$
  .pipe(
    tap((x) => {
      console.log("antes", x);
      return 100; // aunque tengamos un return, éste no cambia el flujo de la información
    }),
    map((val) => val * 10),
    // tap((x) => console.log("despues", x))
    tap({
      next: (valor) => console.log("después", valor),
      complete: () => {
        console.log("Se terminó todo");
      },
    })
  )
  .subscribe((val) => console.log("subs", val));
