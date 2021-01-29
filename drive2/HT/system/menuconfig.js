function menutoggle() {
	var menuid = document.getElementById("systemmenu");
	var startbutton = document.getElementById("menu");
	
	if (menuid.style.display === "none") {
		menuid.style.display = "block";
		startbutton.className += " active";
	} else {
		menuid.style.display = "none";
		startbutton.className = "taskbutton";
	}
} 

function menulostfocus() {
	var menuid = document.getElementById("systemmenu");
	var startbutton = document.getElementById("menu");
	
	menuid.style.display = "none";
	startbutton.className = "taskbutton";
}