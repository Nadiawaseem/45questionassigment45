"use strict";
function creatCar(menuFacture, model, optional) {
    return Object.assign({ menuFacture,
        model }, optional);
}
const myCar = creatCar("toyota", "torolla", (color, year) => );
console.log(myCar);
