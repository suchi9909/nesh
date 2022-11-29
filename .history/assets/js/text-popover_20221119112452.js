function myFunction(e) {
  var x = e.clientX;
  var y = e.clientY;

  console.log(x, y);

  document.getElementsByClassName("tooltipp")[0].style.left = x + "px";
  document.getElementsByClassName("tooltipp")[0].style.top = y + "px";
}