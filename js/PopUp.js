var AbrirPopup = document.getElementById('Abrir1'),
    overlay = document.getElementsByClassName('overlay-revista'),
    popup = document.getElementById('Popup1'),
    CerrarPopup = document.getElementById('btn-cerrar-popup');

AbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

CerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});




/* var AbrirPopup = document.getElementById('Abrir2'),
    overlay = document.getElementById('Over1'),
    popup = document.getElementById('Popup1'),
    CerrarPopup = document.getElementById('btn-cerrar-popup');

AbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

CerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
}); */
