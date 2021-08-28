import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("Siguiente [next]: ", value),
  error: (error) => console.warn("Error [obs]: ", error),
  complete: () => console.info("Completado [obs]"),
};

// crear observable
// const obs$ = Observable.create();
const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  // forzar un error
  //   const a = undefined;
  //   a.nombre = "Fernando";

  // indicar a los subscribers que no voy a emitir nada más
  subs.complete();

  // no tendríamos este mensaje en la salida
  subs.next("Mundo");
});

// procesa el next
// obs$.subscribe(resp => console.log(resp))
// obs$.subscribe(console.log);

// 3 callbacks. Se puede hacer también creando un "Observer" (ver parte superior)
// obs$.subscribe(
//   (valor) => console.log("next: " + valor), // especifico el next
//   (error) => console.warn("error: " + error), // expecifico el error
//   () => console.info("Completado") // especifico qué hacer cuando se completa el observable
// );

// Igual que el ejemplo anterior
obs$.subscribe(observer);
