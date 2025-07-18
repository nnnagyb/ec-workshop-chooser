function openTab(tabID, closeGroup) {
  var i;
  var x = document.getElementsByClassName(closeGroup);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabID).style.display = "block";
}