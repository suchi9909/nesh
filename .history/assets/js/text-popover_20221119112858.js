function myFunction(e) {
  var x = e.clientX - 250;
  var y = e.clientY - 250;

  console.log(x, y);

  document.getElementsByClassName("tooltipp")[0].style.left = x + "px";
  document.getElementsByClassName("tooltipp")[0].style.top = y + "px";
}