import { asyncScheduler } from "rxjs";

// Estas funciones las podemos hacer con asyncScheduler
// setTimeout(() => { }, 3000);
// setInterval(() => { }, 3000);

const saludar = () => {
  console.log("Hola mundo");
};

const saludar2 = (nombre) => {
  console.log(`Hola ${nombre}`);
};

// asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, "Víctor");

// no puede utilizarse una función flecha
const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state", state);

    // volver a llamar al schedule
    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

// asyncScheduler.schedule(subs.unsubscribe) -> esto no funcionaría
asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
