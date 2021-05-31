var priceKm = 0.21
var km = parseInt (prompt('Inserire qui il numero di Km da percorrere'));
var age = parseInt (prompt('Inserire qui la tua età'));
var noDiscount = km * priceKm;
var highDiscount = noDiscount * (0.4);
var valueHighDiscount = noDiscount - highDiscount;
var lowDiscount = noDiscount * (0.2);
var valueLowDiscount = noDiscount - lowDiscount;

if (age >= 65) {
    document.getElementById('price').innerHTML +=  ( valueHighDiscount.toFixed(2) ) + ' ' + '$';
} else if(age < 18) {
    document.getElementById('price').innerHTML += ( valueLowDiscount.toFixed(2) ) + ' ' + '$';
} else {
    document.getElementById('price').innerHTML += ( noDiscount.toFixed(2) ) + ' ' + '$';
}