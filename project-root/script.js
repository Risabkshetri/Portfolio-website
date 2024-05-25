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

// intro section sripting
document.addEventListener("DOMContentLoaded", function() {
  const skills = ["A Web Designer", "A Web Developer", "A Content Writer", "A Video Editor"];
  let index = 0;
  let charIndex = 0;
  const dynamicText = document.getElementById("dynamic-text");

  function typeSkill() {
    if (charIndex < skills[index].length) {
      dynamicText.textContent += skills[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeSkill, 150);
    } else {
      setTimeout(deleteSkill, 2000);
    }
  }

  function deleteSkill() {
    if (charIndex > 0) {
      dynamicText.textContent = skills[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(deleteSkill, 100);
    } else {
      index = (index + 1) % skills.length;
      setTimeout(typeSkill, 500);
    }
  }

  typeSkill(); 
});

// transition and tranform scripting
document.addEventListener("DOMContentLoaded", function() {
  const cols = document.querySelectorAll(".my-col");
console.log(cols);
  const options = {
    root: null, 
    rootMargin: "0px",
    threshold: 0.1 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, options);

  cols.forEach(col => {
    observer.observe(col);
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const intro = document.querySelector(".intro");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
        entry.target.classList.remove("hidden");
      } else {
        entry.target.classList.remove("animate__animated", "animate__fadeInUp");
        entry.target.classList.add("hidden");
      }
    });
  }, options);

  observer.observe(intro);
});