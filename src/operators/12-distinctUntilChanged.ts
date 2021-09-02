import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of(1, 1, "1", 3, 3, 2, 2, 4, "1", 4, 5, 3, 1);

numeros$
  .pipe(
    // distinct() //  ===
    distinctUntilChanged()
  )
  .subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: "Megaman" },
  { nombre: "Megaman" },
  { nombre: "X" },
  { nombre: "Zero" },
  { nombre: "Dr. Willy" },
  { nombre: "X" },
  { nombre: "Megaman" },
  { nombre: "Zero" },
  { nombre: "Zero" },
];

from(personajes)
  .pipe(
    // distinct((personaje) => personaje.nombre), // debemos mandarle un predicado para distinguir los objetos,
    // ya que tienen referencias distintas aunque el contenido sea el mismo
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre) // Los valores que no sean primitivos (boolean, numero, string, ...)
    //hay que trabajarlos con sus propiedades. Debe devolver un boolean.
  )
  .subscribe(console.log);
