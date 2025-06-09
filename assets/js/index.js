var precio = 400000;
var cantidad = 0;
document.querySelector(".cantidad").innerHTML = cantidad;

document.querySelector(".precio-inicial").innerHTML = precio;
document.querySelector(".valor-total").innerHTML = 0;

document.getElementById("btn-sumar").onclick = null;
document.getElementById("btn-restar").onclick = null;

document.getElementById("btn-sumar").setAttribute("onclick", 
  "cantidad = cantidad + 1; \
   document.querySelector('.cantidad').innerHTML = cantidad; \
   document.querySelector('.valor-total').innerHTML = cantidad * precio;");

document.getElementById("btn-restar").setAttribute("onclick", 
  "cantidad = cantidad - 1; \
   document.querySelector('.cantidad').innerHTML = cantidad; \
   document.querySelector('.valor-total').innerHTML = cantidad * precio;");
