function openNav() {
    document.getElementById("mySidenav").style.width = "47%";
    document.getElementById("left").style.opacity = ".5";

    let screenWidth = window.innerWidth

    if (screenWidth > 560 ) {
        document.getElementById("fill-black").style.fill = "black";
        document.querySelector(".contact-link").style.marginTop = "30em";
        document.querySelector(".logo-side").style.display = "none";
    }

    if (320  <= screenWidth && screenWidth <= 560 ) {
      document.getElementById("mySidenav").style.width = "100%";
      document.querySelector(".side").style.display = "flex";
      document.querySelector(".logo-side").style.display = "flex";
      document.querySelector(".contact-link").style.marginTop = "12em";
    }
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("left").style.opacity = "1";
    document.getElementById("fill-black").style.fill = "#FFFF93";
  }