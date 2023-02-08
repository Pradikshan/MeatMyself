document.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach(function(element) {
      let bounding = element.getBoundingClientRect();
      if (bounding.top < window.innerHeight && bounding.bottom > 0) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  });
  