function myFunction(sent) {
  var x = document.getElementById("sent");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  setTimeout(function(){ document.gform.reset(); }, 3000);
}