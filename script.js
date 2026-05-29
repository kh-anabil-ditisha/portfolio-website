// Typing Text
const typing = document.getElementById("typing");
const texts = [
  "CSE Student",
  "Active Learner",
  "Co-Curricular Participant",
  "Future Software Engineer"
];

let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < texts[textIndex].length) {
    typing.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 120);
  } else {
    setTimeout(deleteText, 1200);
  }
}

function deleteText() {
  if (charIndex > 0) {
    typing.innerHTML = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 70);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, 300);
  }
}

typeText();

// Light / Dark Mode
const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    darkBtn.innerHTML = "🌙";
  } else {
    darkBtn.innerHTML = "☀️";
  }
});

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMsg.style.color = "red";
    formMsg.innerHTML = "Please fill all fields!";
  } else if (!email.includes("@") || !email.includes(".")) {
    formMsg.style.color = "red";
    formMsg.innerHTML = "Please enter a valid email!";
  } else {
    formMsg.style.color = "#00ff99";
    formMsg.innerHTML = "Message sent successfully!";
    contactForm.reset();
  }
});

// Back to Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});