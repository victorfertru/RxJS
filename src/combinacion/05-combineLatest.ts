import { combineLatest, fromEvent, pluck } from "rxjs";

// cuando ambos observables se completan, se completa la suscripción
const keyup$ = fromEvent(document, "keyup");
const click$ = fromEvent(document, "click");

// combineLatest(keyup$.pipe(pluck("type")), click$.pipe(pluck("type"))).subscribe(
//   console.log
// );

const input1 = document.createElement("input");
const input2 = document.createElement("input");

input1.placeholder = "email@gmail.com";
input2.placeholder = "******";
input2.type = "password";

document.querySelector("body").append(input1, input2);

//Helper
const getInputStream = (elem: HTMLElement) =>
  fromEvent<KeyboardEvent>(elem, "keyup").pipe(pluck("target", "value"));

// tendríamos el último valor del input1, junto al último valor del input2
combineLatest(getInputStream(input1), getInputStream(input2)).subscribe(
  console.log
);
