function check() {
  if (
    document.forms[0].elements[0].checked == true &&
    document.forms[0].elements[1].checked == true &&
    document.forms[0].elements[2].checked == true
  ) {
    if (!document.querySelector(".wrapper").classList.contains("throb")) {
      document.querySelector(".wrapper").classList.add("throb");
      document.querySelector("audio").play();
      document.getElementById("instruction").style.display = "none";
      document.body.style.background =
        " linear-gradient(to right, #f9a8d4, #f3c6c1, #c4d9e6)";
    }
  } else {
    if (document.querySelector(".wrapper").classList.contains("throb")) {
      document.querySelector(".wrapper").classList.remove("throb");
      document.querySelector("audio").pause();
    }
  }
}
