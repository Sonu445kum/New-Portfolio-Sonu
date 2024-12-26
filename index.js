 const form = document.getElementById("contactForm");
 const responseDiv = document.getElementById("response");

 form.addEventListener("submit", function(event) {
   event.preventDefault();

   // Show success message
   responseDiv.style.display = "block";
   setTimeout(() => {
     responseDiv.style.display = "none";
   }, 5000); // Hide success message after 5 seconds

   // Reset the form
   form.reset();
 });
  
