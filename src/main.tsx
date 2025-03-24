// typage par inférence : ts utilise la valeur initiale de la variable (ici 5) pour typer la variable
// mynumlber ne pourra contenir QUE des number
let mynumber = 5;

mynumber = 2;
console.log(mynumber);

// si y'a pas de valeur initiale on doit expliciter le type, on ajoute ":" derrier la variable et on donne son type
const sum = (nb1: number, nb2: number) => nb1 + nb2;

console.log("2 et 2 ça fait ", sum(2, 2));
