// Navbar Toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Dark/Light Mode
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Enter a valid email!");
    return;
  }

  alert("Message sent successfully!");
  this.reset();
});
