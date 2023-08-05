// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Process form submission logic here
    // You can use AJAX or any other method to handle the form submission
  });
  