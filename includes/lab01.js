alert ("Hello World!");

let person = prompt("Please enter your name");

if (person != null) {
    document.getElementById("name").innerHTML = "Hello, " + person + ". Nice to meet you.";
}

let amountOfMoney = parseInt(prompt("Please enter the amount of money."));
let taxRate = parseInt(prompt("Please enter the tax rate."));
let totalAmount = amountOfMoney*(1+taxRate/100);

document.getElementById("amountOfMoney").innerHTML = "$"+amountOfMoney;
document.getElementById("taxRate").innerHTML = taxRate+"%";
document.getElementById("totalAmount").innerHTML = "$"+parseFloat(totalAmount).toFixed(2);;

