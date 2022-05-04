
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


var encriptarMensaje = document.querySelector("#encriptar-mensaje");
encriptarMensaje.addEventListener("click",function(event){
    event.preventDefault();
    var textoEncriptado = encriptarMensajeEntrada(leerTextoArea());
    escribirTexto(textoEncriptado);
     
});

var desencriptarMensaje = document.querySelector("#desencriptar-mensaje");
desencriptarMensaje.addEventListener("click",function(event){
    event.preventDefault();
    var textoDesencriptado = desencriptarTexto(leerTextoArea());
    escribirTexto(textoDesencriptado); 
    
});

var botonCopiar = document.querySelector("#copiar");
botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    copiarTexto();
    alert("El texto desencriptado ha sido copiado al portapapeles");
});

function esconderImagen() {
    var x = document.getElementById('imagenBuscar');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }

function leerTextoArea(){
    esconderImagen;
    var textoLeido = document.querySelector("#texto-entrada");
    
    return textoLeido.value;
}

function escribirTexto(texto){
    document.querySelector("#desencriptado").value = "";
    document.querySelector("#desencriptado").value = texto;
    esconderImagen;
}

function copiarTexto(){
    var contenido = document.getElementById("desencriptado");
    contenido.select();
    document.execCommand('copy');
}

function encriptarMensajeEntrada(texto){
    var textoNormal = texto.split(''); 
    for (i = 0; i < textoNormal.length; i++) {
        if (textoNormal[i] == "e") {
            textoNormal.splice(i, 1, ("enter"));  
        }
        else if (textoNormal[i] == "i") {
            textoNormal.splice(i, 1, ("imes"));
        }
        else if (textoNormal[i] == "a") {
            textoNormal.splice(i, 1, ("ai"));
        }
        else if (textoNormal[i] == "o") {
            textoNormal.splice(i, 1, ("ober"));
        }
        else if (textoNormal[i] == "u") {
            textoNormal.splice(i, 1, ("ufat"));
        }
    }
    return textoNormal.join('');      
}

function desencriptarTexto(texto){
    var text = texto.split(''); 
    for (i = 0; i < text.length; i++) {
        if ((text[i]+text[i+1]+text[i+2]+text[i+3]+text[i+4]) == "enter") {
            text.splice(i, 5, ("e"));
        }
        else if ((text[i]+text[i+1]+text[i+2]+text[i+3]) == "imes") {
            text.splice(i, 4, ("i"));
        }
        else if ((text[i]+text[i+1]) == "ai") {
            text.splice(i, 2, ("a"));
        }
        else if ((text[i]+text[i+1]+text[i+2]+text[i+3]) == "ober") {
            text.splice(i, 4, ("o"));
        }
        else if ((text[i]+text[i+1]+text[i+2]+text[i+3]) == "ufat") {
            text.splice(i, 4, ("u"));
        }
    }
    return text.join('');      
}