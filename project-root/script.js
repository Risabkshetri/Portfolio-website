// menu scripting
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", function (e) {
  const hamIcon = this.querySelector(".hamburger-icon");
  const crossIcon = this.querySelector(".cross-icon");
  if (hamIcon.style.display === "none") {
    hamIcon.style.display = "inline-block";
    crossIcon.style.display = "none";
    menu.style.display = "none";
  } else {
    crossIcon.style.display = "block";
    hamIcon.style.display = "none";
    menu.style.display = "block";
  }
  e.stopPropagation();
});


const mybutton = document.getElementById("backToTopBtn");
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "inline-block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.onclick = function() {
    document.documentElement.scrollTop = 0;
};

// insta scripting
const insta = document.querySelector(".insta");
insta.addEventListener("click", function (e) {
  alert("Instagram link coming soon!");
  e.preventDefault();
});


// hireme button scripting
document.addEventListener("DOMContentLoaded", function() {
  const openFormBtn = document.querySelector(".animated-button");
  const formPopup = document.getElementById("formPopup");
  const closeFormBtn = document.getElementById("closeFormBtn");

  openFormBtn.addEventListener("click", function(e) {
      formPopup.style.display = "flex"; // Show the form popup
      e.preventDefault();
  });

  closeFormBtn.addEventListener("click", function() {
      formPopup.style.display = "none"; // Hide the form popup
  });
  window.addEventListener("click", function(event) {
      if (event.target == formPopup) {
          formPopup.style.display = "none";
      }
  });
});

