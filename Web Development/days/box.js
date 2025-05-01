  let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById("navbar");

    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = "0"; // Show on scroll up
    } else {
      navbar.style.top = "-70px"; // Hide on scroll down
    }

    prevScrollPos = currentScrollPos;
  };