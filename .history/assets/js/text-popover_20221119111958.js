function myFunction(e) {
  var x = e.clientX;
  var y = e.clientY;

  document.getElementsByClassName("tooltip")[0].style.left = x + "px";
  document.getElementsByClassName("tooltip")[0].style.top = y + "px";
}