var clockDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var clockMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

setInterval(function() {
	var date = new Date();
  var minute = date.getMinutes()
  if (minute < 10) minute = "0" + minute;
	document.getElementById("taskbar-clock").innerHTML = + date.getHours() + ":" + minute + " " + clockDays[date.getDay()] + " " + clockMonths[date.getMonth()] + " " + date.getDate();
}, 1000);