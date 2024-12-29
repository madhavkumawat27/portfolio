// Example of handling form submission with JavaScript
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  this.reset();
});
