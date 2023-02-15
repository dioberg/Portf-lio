

var valorEmDollar = prompt("digite o valor em dolar $ ");
var valorEmReal = prompt("digite o valor da cotação do dia R$ ");

var valorConvertido = valorEmDollar * valorEmReal;
//valorConvertido = valorConvertido.toFixed(2);
alert("R$ " + valorConvertido.toFixed(2));