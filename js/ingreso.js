
function openNavIngreso() {
    document.getElementById("navegacionIngreso").style.width = "100%";
  }

  function closeNavIngreso() {
    document.getElementById("navegacionIngreso").style.width = "0%";
  }


  function inicioSesion() {
    document.getElementById("navegacionIngreso").style.width = "0%";
    localStorage.setItem("estado", 1);
    estadoSesion = localStorage.getItem("estado");
    console.log("Inició sesión. Estado: " + estadoSesion);
    verificarSesion();
  }

  function cerrarSesion(){
    document.getElementById("navegacionIngreso").style.width = "0%";
		localStorage.setItem("estado", 0);
		estadoSesion = localStorage.getItem("estado");
        console.log("Sesión Cerrada. Estado: " + estadoSesion);
        verificarSesion();

  }


  function verificarSesion(){
    estadoSesion = localStorage.getItem("estado");
    if(estadoSesion==1){
        console.log("En sesion - Estado: " + estadoSesion);
        // document.getElementById('icon-login').src = "";
        document.getElementById('btn-ingresof').style.display="none";
        document.getElementById('btn-ingresofi').style.display="none";
        document.getElementById('btn-ingresog').style.display="none";
        document.getElementById('btn-ingresogi').style.display="none";
        document.getElementById('btn-ingresoo').style.display="none";
        document.getElementById('btn-ingresooi').style.display="none";
        document.getElementById('btn-cerrari').style.display="inline";
        document.getElementById('btn-cerrar').style.display="inline";
    }else if(estadoSesion==0){
        console.log("Sesion cerrada - Estado: " + estadoSesion)
        // document.getElementById('icon-login').src = "imagenes/Iconos/4Mesa de trabajo 16.png";
        document.getElementById('btn-ingresof').style.display="inline";
        document.getElementById('btn-ingresofi').style.display="inline";
        document.getElementById('btn-ingresog').style.display="inline";
        document.getElementById('btn-ingresogi').style.display="inline";
        document.getElementById('btn-ingresoo').style.display="inline";
        document.getElementById('btn-ingresooi').style.display="inline";
        document.getElementById('btn-cerrari').style.display="none";
        document.getElementById('btn-cerrar').style.display="none";
    };
};