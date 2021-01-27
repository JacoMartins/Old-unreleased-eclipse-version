window.addEventListener("load", function(){
dragElement(document.getElementById("settings6"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("settings6-header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("settings6-header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

});

var dragfunc = window.elementDrag(e)

function settings6windowopen() {
	var window = document.getElementById("settings6");
	var menuid = document.getElementById("systemmenu");
	if (window.style.display === "none") {
		window.style.left = "12%";
		window.style.right = "12%";
		window.style.top = "6%";
		window.style.display = "block";
		systemmenu.style.display = "none";
	}
} 

function settings6windowclose() {
	var window = document.getElementById("settings6");
	var menuid = document.getElementById("systemmenu");
	if (window.style.display === "block") {
		window.style.display = "none";
		systemmenu.style.display = "none";
	}
} 

function settings6windowmaximize() {
	var window = document.getElementById("settings6");
	var sizingbackground = document.getElementById("settings6-header-sizingbackground");
	
	if (window.style.width === '100%') {
		window.style.width = "800px";
		window.style.height = "600px";
		window.style.resize = "both";
		sizingbackground.style.backgroundImage = "url(../../resources/web/icons/imageres/max.png)";
		
	} else {
		window.style.width = '100%';
		window.style.height = 'calc(100% - 36px)';
		window.style.top = "36px";
		window.style.left = "0px"; 
		window.style.resize = "none";
		sizingbackground.style.backgroundImage = "url(../../resources/web/icons/imageres/res.png)"
		dragfunc = function(){};
	}
}
