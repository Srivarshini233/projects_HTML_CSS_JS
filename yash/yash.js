let container = document.getElementById("paymentMode");

let divElement = document.createElement('div');
container.appendChild(divElement);

let inputElement = document.createElement("input");
inputElement.type = "radio";
inputElement.id = "checkbox1";
divElement.appendChild(inputElement);

let labelElement = document.createElement("i");
labelElement.classList.add("far", "fa-trash-alt", "delete-icon");
divElement.appendChild(labelElement);