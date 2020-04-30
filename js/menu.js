
function openNav() {
  document.getElementById("navegacion").style.width = "100%";
}

function closeNav() {
  document.getElementById("navegacion").style.width = "0%";
}



var prevScrollpos = window.pageYOffset;

window.onscroll = function() {

var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("bar").style.top = "0";
  } else {
    document.getElementById("bar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}



