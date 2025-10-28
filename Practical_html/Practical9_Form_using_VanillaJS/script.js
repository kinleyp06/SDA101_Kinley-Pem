// Get form elements
const form = document.getElementById('registerForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

// Validation functions
function validateUsername() {
  const usernameValue = username.value.trim();
  const errorElement = document.getElementById('usernameError');
  
  if (usernameValue.length < 3) {
    showError(username, errorElement, "Username must be at least 3 characters long");
    return false;
  } else {
    showSuccess(username, errorElement);
    return true;
  }
}

function validateEmail() {
  const emailValue = email.value.trim();
  const errorElement = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(emailValue)) {
    showError(email, errorElement, "Please enter a valid email address");
    return false;
  } else {
    showSuccess(email, errorElement);
    return true;
  }
}

function validatePassword() {
  const passwordValue = password.value;
  const errorElement = document.getElementById('passwordError');
  
  const hasUpperCase = /[A-Z]/.test(passwordValue);
  const hasLowerCase = /[a-z]/.test(passwordValue);
  const hasSpecialChar = /[@#$%]/.test(passwordValue);
  const hasMinLength = passwordValue.length >= 8;
  
  if (!hasMinLength || !hasUpperCase || !hasLowerCase || !hasSpecialChar) {
    const errors = [];
    if (!hasMinLength) errors.push("at least 8 characters");
    if (!hasUpperCase) errors.push("one uppercase letter");
    if (!hasLowerCase) errors.push("one lowercase letter");
    if (!hasSpecialChar) errors.push("one special character (@, #, $, %)");
    
    showError(password, errorElement, `Password must include: ${errors.join(', ')}`);
    return false;
  } else {
    showSuccess(password, errorElement);
    return true;
  }
}

function validateConfirmPassword() {
  const confirmPasswordValue = confirmPassword.value;
  const passwordValue = password.value;
  const errorElement = document.getElementById('confirmPasswordError');
  
  if (confirmPasswordValue !== passwordValue) {
    showError(confirmPassword, errorElement, "Passwords do not match");
    return false;
  } else if (confirmPasswordValue === '') {
    showError(confirmPassword, errorElement, "Please confirm your password");
    return false;
  } else {
    showSuccess(confirmPassword, errorElement);
    return true;
  }
}

// Helper functions
function showError(input, errorElement, message) {
  input.classList.remove('valid');
  input.classList.add('invalid');
  errorElement.textContent = message;
}

function showSuccess(input, errorElement) {
  input.classList.remove('invalid');
  input.classList.add('valid');
  errorElement.textContent = '';
}

function validateAllFields() {
  const isUsernameValid = validateUsername();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();
  
  return isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
}

function updateSubmitButton() {
  if (validateAllFields()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// Event listeners for real-time validation
username.addEventListener('input', () => {
  validateUsername();
  updateSubmitButton();
});

email.addEventListener('input', () => {
  validateEmail();
  updateSubmitButton();
});

password.addEventListener('input', () => {
  validatePassword();
  // Also validate confirm password when password changes
  if (confirmPassword.value) {
    validateConfirmPassword();
  }
  updateSubmitButton();
});

confirmPassword.addEventListener('input', () => {
  validateConfirmPassword();
  updateSubmitButton();
});

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (validateAllFields()) {
    formMessage.textContent = "Registration successful!";
    formMessage.style.color = "green";
    
    // In a real application, you would send the data to a server here
    console.log("Form submitted with:", {
      username: username.value,
      email: email.value,
      password: password.value
    });
    
    // Reset form
    form.reset();
    submitBtn.disabled = true;
    formMessage.textContent = "";
    
    // Remove validation classes
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      input.classList.remove('valid', 'invalid');
    });
    
    const errors = form.querySelectorAll('.error');
    errors.forEach(error => {
      error.textContent = '';
    });
  }
});

// Initial validation to set button state
updateSubmitButton();