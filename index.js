 // JavaScript for handling form submission
 const form = document.getElementById('contactForm');
 const responseDiv = document.getElementById('response');

 form.addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent page reload
   
   // Get form data
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;

   // Build success message
   responseDiv.innerHTML = `
     <strong>Success!</strong> Your message has been sent.<br>
     <strong>Name:</strong> ${name}<br>
     <strong>Email:</strong> ${email}<br>
     <strong>Message:</strong> ${message}
   `;

   // Show the success message
   responseDiv.style.display = 'block';

   // Optionally clear the form
   form.reset();
 });
  