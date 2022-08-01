"use strict"

age.onblur = function() {
	if((isNaN(this.value)) || ((this.value)>100 || (this.value)<1)){
		this.classList.add('error');
		age.value = "Incorrect input data! You mast enter from 1 to 100";
		this.classList.remove('accept');
		age.focus();
	}else{
		this.classList.remove('error')
		this.classList.add('accept');
	}
}

function sendDataByGetMethod() {
	var userData = {
		lName : document.getElementById('lName').value,
		fName : document.getElementById('fName').value,
		age : document.getElementById('age').value,
		address : document.getElementById('address').value
	};
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/formGet?lName= " + userData.lName 
			+ "&fName= "+ userData.fName 
			+ "&age= " + userData.age 
			+ "&address= " + userData.address);
	xhr.setRequestHeader("Content-type", "applcation/json");
	xhr.send();
}

function sendDataByPostMethod() {
	var userData = {
		lName : document.getElementById('lName').value,
		fName : document.getElementById('fName').value,
		age : document.getElementById('age').value,
		address : document.getElementById('address').value
	};
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/formPost");
	xhr.setRequestHeader("Content-type", "applcation/json");
	xhr.send(JSON.stringify(userData));
}