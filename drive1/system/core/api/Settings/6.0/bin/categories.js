function callaccountandusers() {
	var appearancecontent = document.getElementById("settings6-content-appearance");
	var listbutton1 = document.getElementById("settings6-sidebar-list-button-accountandusers");
	var listbutton2 = document.getElementById("settings6-sidebar-list-button-appearance");
	var listbutton3 = document.getElementById("settings6-sidebar-list-button-applications");
	var listbutton4 = document.getElementById("settings6-sidebar-list-button-language");
	var listbutton5 = document.getElementById("settings6-sidebar-list-button-searchingsystem");
	
	listbutton1.style.backgroundColor  = "rgba(255, 255, 255, 0.4)";
	listbutton1.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.12)";
	listbutton1.style.fontWeight = "Bold";
	
	listbutton2.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton2.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton2.style.fontWeight = "normal";
	
	listbutton3.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton3.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton3.style.fontWeight = "normal";
	
	listbutton4.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton4.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton4.style.fontWeight = "normal";
	
	listbutton5.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton5.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton5.style.fontWeight = "normal";
	
	appearancecontent.style.display = "none";
	appearancecontent.style.opacity = "0";
}

function callappearance() {
	var appearancecontent = document.getElementById("settings6-content-appearance");
	var listbutton1 = document.getElementById("settings6-sidebar-list-button-accountandusers");
	var listbutton2 = document.getElementById("settings6-sidebar-list-button-appearance");
	var listbutton3 = document.getElementById("settings6-sidebar-list-button-applications");
	var listbutton4 = document.getElementById("settings6-sidebar-list-button-language");
	var listbutton5 = document.getElementById("settings6-sidebar-list-button-searchingsystem");
	var multibutton1 = document.getElementById("settings6-content-appearance-styles-multibutton-styles");
	var multibutton2 = document.getElementById("settings6-content-appearance-styles-multibutton-color");
	var multibutton3 = document.getElementById("settings6-content-appearance-styles-multibutton-wallpapers");
	
	listbutton1.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton1.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton1.style.fontWeight = "normal";
	
	listbutton2.style.backgroundColor  = "rgba(255, 255, 255, 0.4)";
	listbutton2.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.12)";
	listbutton2.style.fontWeight = "Bold";
	
	listbutton3.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton3.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton3.style.fontWeight = "normal";
	
	listbutton4.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton4.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton4.style.fontWeight = "normal";
	
	listbutton5.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton5.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton5.style.fontWeight = "normal";
	
	appearancecontent.style.display = "block";
	
	multibutton1.classList.add("multibutton");
	multibutton1.classList.remove("multibuttonoff");
	
	multibutton2.classList.add("multibuttonoff");
	multibutton2.classList.remove("multibutton");
	
	multibutton3.classList.add("multibuttonoff");
	multibutton3.classList.remove("multibutton");
	
	appearancecontent.style.opacity = "1";
	appearancecontent.style.transition = "0.5s";
}

function callapplications() {
	var listbutton1 = document.getElementById("settings6-sidebar-list-button-accountandusers");
	var listbutton2 = document.getElementById("settings6-sidebar-list-button-appearance");
	var listbutton3 = document.getElementById("settings6-sidebar-list-button-applications");
	var listbutton4 = document.getElementById("settings6-sidebar-list-button-language");
	var listbutton5 = document.getElementById("settings6-sidebar-list-button-searchingsystem");
	
	listbutton1.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton1.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton1.style.fontWeight = "normal";
	
	listbutton2.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton2.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton2.style.fontWeight = "normal";
	
	listbutton3.style.backgroundColor  = "rgba(255, 255, 255, 0.4)";
	listbutton3.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.12)";
	listbutton3.style.fontWeight = "Bold";
	
	listbutton4.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton4.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton4.style.fontWeight = "normal";
	
	listbutton5.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton5.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton5.style.fontWeight = "normal";
}

function calllanguage() {
	var listbutton1 = document.getElementById("settings6-sidebar-list-button-accountandusers");
	var listbutton2 = document.getElementById("settings6-sidebar-list-button-appearance");
	var listbutton3 = document.getElementById("settings6-sidebar-list-button-applications");
	var listbutton4 = document.getElementById("settings6-sidebar-list-button-language");
	var listbutton5 = document.getElementById("settings6-sidebar-list-button-searchingsystem");
	
	listbutton1.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton1.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton1.style.fontWeight = "normal";
	
	listbutton2.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton2.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton2.style.fontWeight = "normal";
	
	listbutton3.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton3.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton3.style.fontWeight = "normal";
	
	listbutton4.style.backgroundColor  = "rgba(255, 255, 255, 0.4)";
	listbutton4.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.12)";
	listbutton4.style.fontWeight = "Bold";
	
	listbutton5.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton5.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton5.style.fontWeight = "normal";
}

function callsearchingsystem() {
	var listbutton1 = document.getElementById("settings6-sidebar-list-button-accountandusers");
	var listbutton2 = document.getElementById("settings6-sidebar-list-button-appearance");
	var listbutton3 = document.getElementById("settings6-sidebar-list-button-applications");
	var listbutton4 = document.getElementById("settings6-sidebar-list-button-language");
	var listbutton5 = document.getElementById("settings6-sidebar-list-button-searchingsystem");
	
	listbutton1.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton1.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton1.style.fontWeight = "normal";
	
	listbutton2.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton2.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton2.style.fontWeight = "normal";
	
	listbutton3.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton3.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton3.style.fontWeight = "normal";
	
	listbutton4.style.backgroundColor  = "rgba(255, 255, 255, 0.2)";
	listbutton4.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.02)";
	listbutton4.style.fontWeight = "normal";
	
	listbutton5.style.backgroundColor  = "rgba(255, 255, 255, 0.4)";
	listbutton5.style.boxShadow  = "0px 3px 6px rgba(0, 0, 0, 0.12)";
	listbutton5.style.fontWeight = "Bold";
}