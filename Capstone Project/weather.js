$(document).ready(function(){
var temp = $('.temperature');
var APIKEY = '5d2601f4620847da11e653d59d14ae18';
var loc = $('#search').val();
function updateByCity(loc){
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + loc + "&APPID=" + APIKEY;
	sendRequest(url);
}

function k2f(k){
return Math.round(k*(9/5)-459.67);
}
function ascii(a){
	return String.fromCharCode(a);
}

$('.enter').click(function(event){
event.preventDefault();
var loc = $('#search').val();
var url = "http://api.openweathermap.org/data/2.5/weather?q=" + loc + "&APPID=" + APIKEY;
	console.log(url);
	var xmlhttp = new XMLHttpRequest ();
	xmlhttp.onreadystatechange = function(){
		var url = "http://api.openweathermap.org/data/2.5/weather?q=" + loc + "&APPID=" + APIKEY;
		console.log("lol");
	var data = JSON.parse(xmlhttp.responseText);
	var datatext = data.id;
	var name = data.name;
		var locname = name;
		var temptext = k2f(data.main.temp) + ascii(176) + "F";
		console.log(temp);
		console.log(url);
		$('.temperature').text(temptext);
	$('.city').text(name);
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

});

});
