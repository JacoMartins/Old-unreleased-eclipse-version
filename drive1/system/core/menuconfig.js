function voidtoggle() {
	var menuid = document.getElementById("systemmenu");
	var settingsmenuid = document.getElementById("systemsettingsmenu");
	var notificationsmenuid = document.getElementById("systemnotificationsmenu");
	var findmenuid = document.getElementById("systemfindmenu");
	
	menuid.style.display = "none";
	settingsmenuid.style.display = "none";
	notificationsmenuid.style.display = "none";
	findmenuid.style.display = "none";
}

function menutoggle() {
	var menuid = document.getElementById("systemmenu");
	var settingsmenuid = document.getElementById("systemsettingsmenu");
	var notificationsmenuid = document.getElementById("systemnotificationsmenu");
	var findmenuid = document.getElementById("systemfindmenu");
	
	if (menuid.style.display === "none") {
		menuid.style.display = "block";
		settingsmenuid.style.display = "none";
		notificationsmenuid.style.display = "none";
		findmenuid.style.display = "none";
	} else {
		menuid.style.display = "none";
	}
} 

function settingsmenutoggle() {
	var menuid = document.getElementById("systemmenu");
	var settingsmenuid = document.getElementById("systemsettingsmenu");
	var notificationsmenuid = document.getElementById("systemnotificationsmenu");
	var findmenuid = document.getElementById("systemfindmenu");
	
	if (settingsmenuid.style.display === "none") {
		menuid.style.display = "none";
		settingsmenuid.style.display = "block";
		notificationsmenuid.style.display = "none";
		findmenuid.style.display = "none";
	} else {
		settingsmenuid.style.display = "none";
	}
} 

function notificationsmenutoggle() {
	var menuid = document.getElementById("systemmenu");
	var settingsmenuid = document.getElementById("systemsettingsmenu");
	var notificationsmenuid = document.getElementById("systemnotificationsmenu");
	var findmenuid = document.getElementById("systemfindmenu");
	
	if (notificationsmenuid.style.display === "none") {
		menuid.style.display = "none";
		settingsmenuid.style.display = "none";
		notificationsmenuid.style.display = "block";
		findmenuid.style.display = "none";
	} else {
		notificationsmenuid.style.display = "none";
	}
} 

function findmenunone() {
	var menuid = document.getElementById("systemmenu");
	var settingsmenuid = document.getElementById("systemsettingsmenu");
	var notificationsmenuid = document.getElementById("systemnotificationsmenu");
	var findmenuid = document.getElementById("systemfindmenu");
	var findmenutextinputid = document.getElementById("systemtextinputfind");
	
	if (findmenutextinputid.value === "") {
		findmenuid.style.display = "none";
	}
}

function findmenublock() {
	var menuid = document.getElementById("systemmenu");
	var settingsmenuid = document.getElementById("systemsettingsmenu");
	var notificationsmenuid = document.getElementById("systemnotificationsmenu");
	var findmenuid = document.getElementById("systemfindmenu");
	var findmenutextinputid = document.getElementById("systemtextinputfind");
	
	menuid.style.display = "none";
	settingsmenuid.style.display = "none";
	notificationsmenuid.style.display = "none";
	findmenuid.style.display = "block";
}