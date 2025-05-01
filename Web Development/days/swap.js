function swapImage() {
    const image = document.getElementById("mainImage");
    const currentSrc = image.getAttribute("src");
  
    const newSrc =
      currentSrc.includes("1X5AzXcB2Zg&s")
        ? "https://cdn.telugu360.com/wp-content/uploads/2017/08/Vijay-Devarakonda-owned-Arjun-Reddy.jpg"
        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJcYA5dX98kNdS_Fawttyjm2_1X5AzXcB2Zg&s";
  
    image.setAttribute("src", newSrc);
  }
  