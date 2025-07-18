function openTab(tabID, closeGroup) {
  var i;
  var x = document.getElementsByClassName(closeGroup);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var y = document.getElementsByClassName(closeGroup + "-button");
  for (i = 0; i < y.length; i++) {
    y[i].classList.remove("active");
  }

  document.getElementById(tabID).style.display = "flex";
  document.getElementById(tabID + "-button").classList.add("active");
}