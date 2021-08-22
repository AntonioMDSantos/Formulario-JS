function bloqueiaNumero(texto){
    var tecla = texto.which || texto.keyCode;
    if ((tecla >= 97 && tecla <= 117) || (tecla === 8)){
      return true;
    }else{
      return false;
    }
}

function PermiteNumero(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /^[0-9]+$/;
    if ( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function Enviar() {
    document.getElementById("meuform").submit();
}

function Resetar() {
    document.getElementById("meuform").reset();
}