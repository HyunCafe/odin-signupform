const form = document.getElementById('my-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form input values
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Check if the input fields are empty
  if (
    firstName === '' ||
    lastName === '' ||
    email === '' ||
    phoneNumber === '' ||
    password === '' ||
    confirmPassword === ''
  ) {
    alert('Please fill out all fields');
    return;
  }

  // Check if the email is valid
  if (!isValidEmail(email)) {
    alert('Please enter a valid email');
    return;
  }

  // Check if the phone number is valid
  if (!isValidPhoneNumber(phoneNumber)) {
    alert('Please enter a valid phone number');
    return;
  }

  // Check if the password is at least 8 characters long
  if (password.length < 8) {
    alert('Password must be at least 8 characters long');
    return;
  }

  // Check if the passwords match
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Submit the form
  form.submit();
});

// Helper function to validate email
function isValidEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

// Helper function to validate phone number
function isValidPhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}
