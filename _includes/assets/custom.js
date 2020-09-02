function unified() {
	var divs = document.getElementsByClassName("clics");
	for(var i = 0; i < divs.length; ++i) {
		divs[i].style.display = "initial";
	}
	var divs = document.getElementsByClassName("problemarchive");
	for(var i = 0; i < divs.length; ++i) {
		divs[i].style.display = "initial";
	}
}
function clics() {
	var divs = document.getElementsByClassName("clics");
	for(var i = 0; i < divs.length; ++i) {
		divs[i].style.display = "initial";
	}
	var divs = document.getElementsByClassName("problemarchive");
	for(var i = 0; i < divs.length; ++i) {
		divs[i].style.display = "none";
	}
}
function problemarchive() {
	var divs = document.getElementsByClassName("clics");
	for(var i = 0; i < divs.length; ++i) {
		divs[i].style.display = "none";
	}
	var divs = document.getElementsByClassName("problemarchive");
	for(var i = 0; i < divs.length; ++i) {
		divs[i].style.display = "initial";
	}
}
