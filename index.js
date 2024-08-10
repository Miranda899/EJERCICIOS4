//declaracion
function showMessage(){
    console.log("hola");

}

//invocacion
showMessage();

//parametros
function showNewMessage(x){
 console.log(x);   
}

//argumentos
showNewMessage("argumento y parametro");

//scope
//variable global
let name = "liz";

function prinName(){
    //variable local
    var lastName = "estrada";
    let name = "liz";
    console.log(name);
    console.log(lastName);

}
// console.log(lastname);
printName();


//return
function calcTotal(x , y){
    const total= z+y;
    return total;
}

//funcion realizar pago con mi suma
function makePayment(total){
 console.log("you are paying:", total);   

}


//manda a imprimir
const res = calcTotal(100,150);
makePayment(res);
console.log(res);

//mas facil pero la misma instruccion seria}

function{
calcCelcius(fahr)
return (fahr = 32)*5/9;
}

//otra forma es asi pero un poco mas revuelto
function calcCelcius(fahr);{
    return 'los grados f ${fahr} equivale a ${(fahr = 32)*5/9} c';
}

/////////////
// arrow functions
//lambda functions ques es una funcion anonima
//que hace la misma funcion que el calCelcius(fahr);
// funcion flecha no llevan return
const calcCelArrow = (fahr) => (fahr -32)*5/9;







