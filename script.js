const slides = document.querySelectorAll('.hero-bg-slider span');
let currentSlide = 0;

slides[currentSlide].classList.add('active');

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 5000); // change every 5 seconds

/* hamburger set up*/
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});




// Initialize EmailJS (get your credentials from emailjs.com)
emailjs.init("zBBTY7Ye7WbXF2fTW"); // Replace with your EmailJS public key

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const statusDiv = document.getElementById("formStatus");
  
  // Send email using EmailJS
  emailjs.send("service_ptk3sy4", "YOUR_TEMPLATE_ID", {
    to_email: "kiapranis@gmail.com", // Your email address
    from_name: name,
    from_email: email,
    message: message
  }).then(function(response) {
    statusDiv.textContent = "✓ Message sent successfully!";
    statusDiv.classList.add("success");
    document.getElementById("contactForm").reset();
    setTimeout(() => {
      statusDiv.textContent = "";
      statusDiv.classList.remove("success");
    }, 5000);
  }, function(error) {
    statusDiv.textContent = "✗ Failed to send message. Please try again.";
    statusDiv.classList.add("error");
    console.log("FAILED", error);
  });
});
