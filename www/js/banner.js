/* ARRAY DE IMAGENES */
function traer_banners_principal(){
 var xmlhttp;
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", ruta + "/webservice_appv2.php?opc=15&peticionbanner=1", false);
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	  if(xmlhttp.responseText != ''){
		document.getElementById("divbanner1").style.display = 'block';
		document.getElementById("divbanner1").innerHTML = xmlhttp.responseText;
	  }
  }
}
xmlhttp.send(null);
}
/*				
ads = new Array(7);
ads[0] = "https://guiakmymedio.com.co/banners_temp/1.png";
ads[1] = "https://guiakmymedio.com.co/banners_temp/2.png";
ads[2] = "https://guiakmymedio.com.co/banners_temp/3.png";
ads[3] = "https://guiakmymedio.com.co/banners_temp/4.png";
ads[4] = "https://guiakmymedio.com.co/banners_temp/5.png";
ads[5] = "https://guiakmymedio.com.co/banners_temp/6.png";
ads[6] = "https://guiakmymedio.com.co/banners_temp/7.png";

//variable para llevar la cuenta de las imagenes
var longuitudArray = ads.length;
var contador = 0;var contador1 = 0;

// Cojemos un numero aleatorio
contador = Math.floor((Math.random() * longuitudArray));
contador1 = Math.floor((Math.random() * longuitudArray));

// Cambia la imagen cada segundo en este ejemplo
var tiempo = 7;// En segundos
var timer = tiempo * 1000;
function banner() {
	contador++;
	contador = contador % longuitudArray;
	document.banner.src = ads[contador];
	setTimeout("banner()", timer);
}
function banner1() {
	contador1++;
	contador1 = contador1 % longuitudArray;
	document.banner1.src = ads[contador1];
	setTimeout("banner1()", timer);
}*///divbanner1
