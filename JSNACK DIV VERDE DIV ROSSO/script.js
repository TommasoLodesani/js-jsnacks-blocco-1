const outRosso = document.querySelector(".lista-rossa");

const outVerde = document.querySelector(".lista-verde");

const listaNumeri = [];



for(let i = 0; i < 20; i++){
    listaNumeri.push(Math.floor(Math.random() * 1000) + 1);

    let listaNumeriDev = listaNumeri[i];

    if(listaNumeriDev % 2 == 0){
       
        console.log("questo è un numero pari " + listaNumeriDev);
        outRosso.innerHTML += `<li>${listaNumeriDev}</li>`;


    } else if (listaNumeriDev % 2 == 1){
        console.log("questo è un numero dispari " + listaNumeriDev);
        outVerde.innerHTML += `<li>${listaNumeriDev}</li>`;
    }

}




