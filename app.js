/*Metodos para seleccionar elementos del DOM (nodos del tipo 1)
document.getElementById() // Nodo del tipo elemento que coincida con el ID indicado
document.getElementsByTagName() // Colección de elementos HTML
document.getElementsByClassName() // Colección de elemento HTML
document.querySelector() // Primer elemento que cumpla la condición
document.querySelectorAll()// Todos los elementos que cumplan la condición
*/
// Estos se utilizan con css
var title = document.querySelector("#title");
console.log(title);
console.log(title.firstChild);

var navbar = document.querySelector("#navbar");
console.log(navbar);

var item = document.querySelector(".item");// sólo nos muestra el primer elemento que coincida con esta clase
console.log(item);

var listItem = document.querySelectorAll(".item");// Nos trae todos los elementos que coinciden con la clase
console.log(listItem);







/*
var title =document.getElementById("title");
console.log(title);
console.log(title.firstChild);

var linkList = document.getElementsByTagName("a");
console.log(linkList);
console.log(linkList[0]);
console.log(linkList[0].firstChild);

var itemsList = document.getElementsByClassName("item");
console.log(itemsList);
console.log(itemsList[4]);
console.log(itemsList[4].firstElementChild);
console.log(itemsList[4]firstElementChild.firstChild);
*/
