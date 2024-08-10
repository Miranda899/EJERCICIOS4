function recursiveSum(x)
{
    const res =x+x;
    console.log(res);
}


recursiveSum(1);


//otra forma
function recursiveSum(x)
{
    const res =x+x;
    console.log(res);
    recursiveSum(res);
}
//control c para cancelar proceso
