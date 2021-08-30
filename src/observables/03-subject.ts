import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalID);
    console.log("Intervalo destruido");
  };
});

/**
 *  Características del subject:
 * 1- Casteo múltiple - Muchas subscripciones van a estar sujetas a este mismo subject/observable
 * y va a servir para distribuir a todos los lugares que estén suscritos o les interese el valor
 * 2- También es un observer
 * 3- Next, error y complete
 */
const subject$ = new Subject();

const subscription = intervalo$.subscribe(subject$);

// Valores distintos en cada suscripción al no utilizar subject
// const subs1 = intervalo$.subscribe((rnd) => console.log("subs1", rnd));
// const subs2 = intervalo$.subscribe((rnd) => console.log("subs2", rnd));

// Valores iguales en cada suscripción
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);

  subject$.complete();

  // tenemos que hacer unsubscribe o no terminaría el interval
  subscription.unsubscribe();
}, 3500);
