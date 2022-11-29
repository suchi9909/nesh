function myFunction(e) {
  var x = e.clientX - 400;
  var y = e.clientY - 400;

  console.log(x, y);

  document.getElementsByClassName("tooltipp")[0].style.left = x + "px";
  document.getElementsByClassName("tooltipp")[0].style.top = y + "px";
}