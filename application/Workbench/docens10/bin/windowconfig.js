window.addEventListener("load", function(){
dragElement(document.getElementById("docens10"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("docens10-header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("docens10-header").onmousedown = dragMouseDown;
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

function docens10windowopen() {
	var docens10 = document.getElementById("docens10");
	var menuid = document.getElementById("systemmenu");
	if (docens10.style.display === "none") {
		docens10.style.display = "block";
		systemmenu.style.display = "none";
	}
} 

function docens10windowclose() {
	var docens10 = document.getElementById("docens10");
	var menuid = document.getElementById("systemmenu");
	if (docens10.style.display === "block") {
		docens10.style.display = "none";
		systemmenu.style.display = "none";
	}
} 

function docens10windowmaximize() {
	var docens10 = document.getElementById("docens10");
	
	if (docens10.style.width === '100%') {
		docens10.style.width = "800px";
		docens10.style.height = "600px";
	} else {
		docens10.style.width = '100%';
		docens10.style.height = 'calc(100% - 36px)';
		docens10.style.top = "36px";
		docens10.style.left = "0px"; 
	}
}