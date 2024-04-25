const form = document.getElementById('feedback-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (validateName() && validateEmail() && validateMessage()) {
    // If all fields are valid, submit the form (you can add AJAX or other form submission logic here)
    alert('Form submitted successfully!');
    form.reset(); // Reset the form after submission
  }
});

function validateName() {
  const nameValue = nameInput.value.trim();
  if (nameValue === '') {
    showError(nameError, 'Name is required');
    return false;
  } else {
    hideError(nameError);
    return true;
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === '') {
    showError(emailError, 'Email is required');
    return false;
  } else if (!emailValue.match(emailPattern)) {
    showError(emailError, 'Please enter a valid email address');
    return false;
  } else {
    hideError(emailError);
    return true;
  }
}

function validateMessage() {
  const messageValue = messageInput.value.trim();
  if (messageValue === '') {
    showError(messageError, 'Message is required');
    return false;
  } else {
    hideError(messageError);
    return true;
  }
}

function showError(element, message) {
  element.textContent = message;
  element.style.display = 'block';
}

function hideError(element) {
  element.textContent = '';
  element.style.display = 'none';
}
