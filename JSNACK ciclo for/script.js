
const myOutput = document.querySelector("ul");
const listaNumeri = [];

for(let i = 0; i < 10; i++){
    listaNumeri.push(Math.floor(Math.random() * 1000) + 1);
    
}

myOutput.innerHTML = `<li>${listaNumeri}</li>`;
console.log(listaNumeri);










