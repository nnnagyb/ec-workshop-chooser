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

  if (tabID = "tatk") {
    document.getElementById("tarstud").style.display = "flex";
    document.getElementById("tarstud-button").classList.add("active");
  }
  if (tabID = "ik") {
    document.getElementById("info").style.display = "flex";
    document.getElementById("info-button").classList.add("active");
  }
  if (tabID = "gtk") {
    document.getElementById("gazdtud").style.display = "flex";
    document.getElementById("gazdtud-button").classList.add("active");
  }
}