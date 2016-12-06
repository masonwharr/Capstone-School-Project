$(document).ready(function(){
var temp = $('.temperature');
var APIKEY = '5d2601f4620847da11e653d59d14ae18';
var loc = $('#search').val();
function updateByCity(loc){
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + loc + "&APPID=" + APIKEY;
	sendRequest(url);
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
		var humiditytext = data.main.humidity + "%";
		console.log(temp);
		console.log(url);
		$('.humidity').text(humiditytext);
	$('.city').text(name);
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

});

});