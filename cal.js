function keys(num){
    document.getElementById('screen').value += num;
}
function square(){
    let display = document.getElementById('screen');
    display.value = display.value * display.value
}
function sin(){
	document.getElementById("screen").value = Math.sin(document.getElementById("screen").value);
}
function cos(){
	document.getElementById("screen").value = Math.cos(document.getElementById("screen").value);
}
function tan(){
	document.getElementById("screen").value = Math.tan(document.getElementById("screen").value);
}
function squareroot(){
	document.getElementById("screen").value = Math.sqrt(document.getElementById("screen").value);
}
function search(val) { document.getElementById("screen").value=val; 
}
function solve() { 
	try { search(eval(document.getElementById("screen").value)) 
} 
catch(e) { search('Error') } 
}

function clearit() { 
    document.getElementById("screen").value = "";
}