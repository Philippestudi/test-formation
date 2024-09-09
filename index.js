console.log("bonjour");

let variable = "hello";
console.log(variable)
//constante
const prenom = "justine";
variable = "tt";
console.log(variable)

let array =["je","suis","moi"];
console.log(array);
let objet = {
    prenom:"audrey",
    age:33,
}
console.log(objet);

function faireQuelqueChose() {
    console.log("je fais un truc");
    console.log(5 + 6);

  };

  faireQuelqueChose();

  const addition = (a,b)=> {
    console.log(a+b)
  };


addition(3,22);

const basile = document.querySelector('body');


console.log(basile);
basile.style.background="yellow";
basile.addEventListener("click"),() => {
    console.log('click');
    basile.classList.toggle("rrrr");
};