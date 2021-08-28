import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  // crear un contador, 1, 2, 3, 4, 5, ...
  let contador = 0;
  const interval = setInterval(() => {
    contador++;
    subscriber.next(contador);
    console.log(contador);
  }, 1000);

  setTimeout(() => {
    // después de llamar a la función complete, se dispara la función que tenemos en el return
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido");
  };
});

// const subscription = intervalo$.subscribe((num) => console.log("Num: ", num));
// const subs2 = intervalo$.subscribe((num) => console.log("Num: ", num));
// const subs3 = intervalo$.subscribe((num) => console.log("Num: ", num));

const subscription = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

// Para no tener que repetir las subscripciones, podemos encadenarlas
subscription.add(subs2.add(subs3));
// subscription.add(subs3);

setTimeout(() => {
  subscription.unsubscribe();
  //   subs2.unsubscribe();
  //   subs3.unsubscribe();

  console.log("Completado timeout");
}, 6000);
