var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var product3 = document.getElementById("product3");
var qty3 = document.getElementById("qty3");
var price3 = document.getElementById("price3");

var product4 = document.getElementById("product4");
var qty4 = document.getElementById("qty4");
var price4 = document.getElementById("price4");

var product5 = document.getElementById("product5");
var qty5 = document.getElementById("qty5");
var price5 = document.getElementById("price5");

var product6 = document.getElementById("product6");
var qty6 = document.getElementById("qty6");
var price6 = document.getElementById("price6");

var product7 = document.getElementById("product7");
var qty7 = document.getElementById("qty7");
var price7 = document.getElementById("price7");

var product8 = document.getElementById("product8");
var qty8 = document.getElementById("qty8");
var price8 = document.getElementById("price8");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder(){
    carts.textContent = "";
    if (parseFloat(qty1.value) > 0){
        var order = qty1.value.toString() + ' pc/s x' + price1.textContent + '------' + product1.textContent + '------ Php' + (parseFloat(qty1.value)*parseFloat(price1.textContent)) + '\n';
        carts.textContent += order;
    }
    if (parseFloat(qty2.value) > 0){
        var order = qty2.value.toString() + ' pc/s x' + price2.textContent + '------' + product2.textContent + '------ Php' + (parseFloat(qty2.value)*parseFloat(price2.textContent)) + '\n';
        carts.textContent += order;
    }
    if (parseFloat(qty3.value) > 0){
        var order = qty3.value.toString() + ' pc/s x' + price3.textContent + '------' + product3.textContent + '------ Php' + (parseFloat(qty3.value)*parseFloat(price3.textContent)) + '\n';
        carts.textContent += order;
    }
    if (parseFloat(qty4.value) > 0){
        var order = qty4.value.toString() + ' pc/s x' + price4.textContent + '------' + product4.textContent + '------ Php' + (parseFloat(qty4.value)*parseFloat(price4.textContent)) + '\n';
        carts.textContent += order;
    }
    if (parseFloat(qty5.value) > 0){
        var order = qty5.value.toString() + ' pc/s x' + price5.textContent + '------' + product5.textContent + '------ Php' + (parseFloat(qty5.value)*parseFloat(price5.textContent)) + '\n';
        carts.textContent += order;
    }
    if (parseFloat(qty6.value) > 0){
        var order = qty6.value.toString() + ' pc/s x' + price6.textContent + '------' + product6.textContent + '------ Php' + (parseFloat(qty6.value)*parseFloat(price6.textContent)) + '\n';
        carts.textContent += order;
    }
    if (parseFloat(qty7.value) > 0){
        var order = qty7.value.toString() + ' pc/s x' + price7.textContent + '------' + product7.textContent + '------ Php' + (parseFloat(qty7.value)*parseFloat(price7.textContent)) + '\n';
        carts.textContent += order;
    }
    if (parseFloat(qty8.value) > 0){
        var order = qty8.value.toString() + ' pc/s x' + price8.textContent + '------' + product8.textContent + '------ Php' + (parseFloat(qty8.value)*parseFloat(price8.textContent)) + '\n';
        carts.textContent += order;
    }
}

function totalOrder(){
    
    var subtotal1 = (parseFloat(qty1.value)*parseFloat(price1.textContent));
    total += subtotal1;
    var subtotal2 = (parseFloat(qty2.value)*parseFloat(price2.textContent));
    total += subtotal2;
    var subtotal3 = (parseFloat(qty3.value)*parseFloat(price3.textContent));
    total += subtotal3;
    var subtotal4 = (parseFloat(qty4.value)*parseFloat(price4.textContent));
    total += subtotal4;
    var subtotal5 = (parseFloat(qty5.value)*parseFloat(price5.textContent));
    total += subtotal5;
    var subtotal6 = (parseFloat(qty6.value)*parseFloat(price6.textContent));
    total += subtotal6;
    var subtotal7 = (parseFloat(qty7.value)*parseFloat(price7.textContent));
    total += subtotal7;
    var subtotal8 = (parseFloat(qty8.value)*parseFloat(price8.textContent));
    total += subtotal8;

    total.textContent = total.value;
}
totalOrder();
if (cash)

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);
qty5.addEventListener("keyup", addOrder);
qty6.addEventListener("keyup", addOrder);
qty7.addEventListener("keyup", addOrder);
qty8.addEventListener("keyup", addOrder);
