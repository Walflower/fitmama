export function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  const phone_pattern =
    /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?[-.\s]?)?(\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})$/;

  /**the errors aren't really working, if input name is still shows the error message. fix */
  if (!values.name) {
    error.name = "Name should not be empty";
  }

  if (!values.email) {
    error.email = "Enter your email";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Invalid email";
  }

  if (!values.phone_number) {
    error.phone_number = "Enter your phone number";
  } else if (!phone_pattern.test(values.phone_number)) {
    error.phone_number = "Invalid phone number";
  }

  if (!values.password) {
    error.password = "Enter a password";
  } else if (!password_pattern.test(values.password)) {
    error.password =
      "Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, and a number";
  }
  return error;
}
