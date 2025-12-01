# Exercise 2 - Basic Form Validation

## Objective
Implement client-side form validation using Vanilla JavaScript. Your goal is to make sure the form checks for valid user input in real-time (as the user types), without reloading the page.

## What You'll Build
A simple registration form with the following fields:
- Username
- Email
- Password
- Confirm Password

## Step 1: Create the HTML Form
Create a basic HTML form containing:
- `<input>` fields for username, email, password, and confirm password.
- A Submit button.
- Give each input field a unique `id` so you can easily access them in JavaScript.

**Example:**
```html
<form id="registerForm">
  <label>Username</label>
  <input type="text" id="username" />

  <label>Email</label>
  <input type="email" id="email" />

  <label>Password</label>
  <input type="password" id="password" />

  <label>Confirm Password</label>
  <input type="password" id="confirmPassword" />

  <button type="submit" disabled>Register</button>
</form>
<div id="errorMessages"></div>
```

## Step 2: Connect JavaScript to your HTML
Link your JavaScript file at the end of the `<body>` section:
```html
<script src="script.js"></script>
```

## Step 3: Add Real-time Validation
Use JavaScript to check each field as the user types (`input` event).

### Validation Rules
| Field | Validation Rule |
|-------|----------------|
| Username | Must be at least 3 characters long |
| Email | Must follow correct email format (e.g., someone@example.com) |
| Password | Must include:<br>- Minimum 8 characters<br>- At least one uppercase letter<br>- At least one lowercase letter<br>- At least one special character (e.g., @, #, $, %) |
| Confirm Password | Must match the password field |

## Step 4: Show Error Messages Dynamically
Use DOM manipulation to display helpful messages below each input field.

**Example:**
```javascript
usernameError.textContent = "Username must be at least 3 characters long";
```

## Step 5: Disable the Submit Button Until All Fields Are Valid
- Initially, keep the Submit button disabled.
- Only enable it when all validations pass.

**Example Logic:**
```javascript
if (allFieldsAreValid) {
  submitButton.disabled = false;
} else {
  submitButton.disabled = true;
}
```

## Step 6: (Optional) Style Your Form
Use CSS to make:
- Error messages appear in red.
- Valid inputs have green borders.