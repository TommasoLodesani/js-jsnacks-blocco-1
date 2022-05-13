
// PRIMO ESERCIZIO

// const myArr = [];
// while(myArr.length < 10){
//     let randNum = (Math.floor(Math.random() * 100) + 1);

//     if(!myArr.includes(randNum)){
//         myArr.push(randNum);
//     }

// }

// console.log(myArr);


// SECONDO ESERCIZIO

const myArr = [];

let askNumber;

let valid = false;

while (!false) {
    askNumber = parseInt(prompt("inserisci un numero"));
    myArr.push(askNumber);

    let initialValue;
    const sumWithInitial = myArr.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );

    
}


console.log(myArr);
