const arrayUno = ["parola 1-1", "parola 2-1", "parola 3-1", "parola 4-1", "parola 5-1"];

const arrayDue = ["parola 1-2","parola 2-2"];

const myList = document.getElementById("list");

for(let i = 0; i < arrayUno.length; i++){

    let parolaLivelloUno = arrayUno[i];
    
    let li = document.createElement("li");
    li.append(parolaLivelloUno);
    myList.append(li);
    let ulSecondoLivello = document.createElement("ul");

    for(let j = 0; j < arrayDue.length; j++ ){
        let parolaLivelloDue = arrayDue[j];
        let liSecondo = document.createElement("li");
        liSecondo.append(parolaLivelloDue);
        ulSecondoLivello.append(liSecondo);
        li.append(ulSecondoLivello);

    }



    console.log(parolaLivelloUno);
}