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
    carts.textContent="";
    if (parseFloat(qty.value) > 0){
        var order = qty1.value.toString() + ' pc/s x' + price1.textContent + '------' + product1.textContent + '------ Php' + (parseFloat(qty1.value)*parseFloat(price1.textContent)) + '\n';
        carts.textContent += carts.value.toString() + "\n";
        carts.textContent += order;
    }
}


qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);
qty5.addEventListener("keyup", addOrder);
qty6.addEventListener("keyup", addOrder);
qty7.addEventListener("keyup", addOrder);
qty8.addEventListener("keyup", addOrder);
qty1.addEventListener("keydown", addOrder);
qty2.addEventListener("keydown", addOrder);
qty3.addEventListener("keydown", addOrder);
qty4.addEventListener("keydown", addOrder);
qty5.addEventListener("keydown", addOrder);
qty6.addEventListener("keydown", addOrder);
qty7.addEventListener("keydown", addOrder);
qty8.addEventListener("keydown", addOrder);
