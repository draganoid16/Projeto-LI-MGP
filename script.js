document.getElementById("cagado").style.display = 'none';
document.getElementById("osga-moura").style.display = 'none';


var cagado = document.getElementById("1");
var osgamoura = document.getElementById("2");

cagado.onclick = function(){
 document.getElementById("cagado").style.display = '';
 document.getElementsByClassName('choice1')[0].style.visibility = 'hidden';
}

osgamoura.onclick  = function(){
 document.getElementById("osga-moura").style.display = '';
 document.getElementsByClassName('choice1')[0].style.visibility = 'hidden';
}




console.log("gay");