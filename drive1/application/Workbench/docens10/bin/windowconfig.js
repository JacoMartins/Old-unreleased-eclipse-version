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
	docens10windowmaximizesnap()
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
	var sizingbackground = document.getElementById("docens10-header-sizingbackground");
	
	if (docens10.style.display === "none") {
		docens10.style.display = "block";
		docens10.style.top = "48px";
		docens10.style.left = "128px";
		docens10.style.height = "600px";
		docens10.style.width = "800px";
		systemmenu.style.display = "none";
		prevwidth = docens10.style.width;
		prevheight = docens10.style.height;
		prevleft = docens10.style.left;
		prevtop = docens10.style.top;
		sizingbackground.style.backgroundImage = "url(../../../system/resources/web/icons/imageres/max.png)";
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

var prevwidth;
var prevheight;
var prevleft;
var prevtop;

function docens10windowmaximize() {
	var docens10 = document.getElementById("docens10");
	var sizingbackground = document.getElementById("docens10-header-sizingbackground");
	
	if (docens10.style.width === '100%') {
		docens10.style.transition = "0.3s";
		setTimeout(function() {
			docens10.style.transition = "none";
		}, 300)
		docens10.style.width = prevwidth;
		docens10.style.height = prevheight;
		docens10.style.left = prevleft;
		docens10.style.top = prevtop;
		docens10.style.resize = "both";
		sizingbackground.style.backgroundImage = "url(../../../system/resources/web/icons/imageres/max.png)";
	} else {
		docens10.style.transition = "0.3s";
		setTimeout(function() {
			docens10.style.transition = "none";
		}, 300)
		prevwidth = docens10.style.width;
		prevheight = docens10.style.height;
		prevleft = docens10.style.left;
		prevtop = docens10.style.top;
		docens10.style.width = '100%';
		docens10.style.height = 'calc(100% - 36px)';
		docens10.style.top = "36px";
		docens10.style.left = "0px"; 
		docens10.style.resize = "none";
		sizingbackground.style.backgroundImage = "url(../../../system/resources/web/icons/imageres/res.png)";
	}
}

function docens10windowmaximizesnap() {
	var docens10 = document.getElementById("docens10");
	var sizingbackground = document.getElementById("docens10-header-sizingbackground");
	
	if (docens10.style.width === '100%') {
		docens10.style.width = prevwidth;
		docens10.style.height = prevheight;
		docens10.style.resize = "both";
		sizingbackground.style.backgroundImage = "url(../../../system/resources/web/icons/imageres/max.png)";
	}
}