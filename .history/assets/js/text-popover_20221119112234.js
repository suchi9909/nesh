function myFunction(e) {
  var x = e.clientX;
  var y = e.clientY;

  document.getElementsByClassName("tooltipp")[0].style.left = x + "px";
  document.getElementsByClassName("tooltipp")[0].style.top = y + "px";
}