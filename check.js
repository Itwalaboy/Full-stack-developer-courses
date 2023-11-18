console.log("title");
title[0].textContent="Hello";
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)')
for(var i=0; i<odd.length; i++){
	odd[i].style.backgroundcolor="green";
	even[i].style.backgroundcolor="green";}