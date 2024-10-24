export function Validation(values) {
  let error = {};
  // const email_pattern = /^[^\s@+@[^\s@]+\.[^\s@]+$/;
  //trying this email pattern
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  // const phone_pattern =
  //   /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?[-.\s]?)?(\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})$/;

  /**the errors aren't really working, if input name is still shows the error message. fix */
  if (!values.user_id) {
    error.user_id = "User id not created correctly";
  }
  if (!values.first_name || !values.first_name.trim()) {
    error.first_name = "Enter your first name";
  }
  if (!values.last_name || !values.last_name.trim()) {
    error.last_name = "Enter your last name";
  }

  if (!values.email || !values.email.trim()) {
    error.email = "Enter your email";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Invalid email";
  }

  if (!values.password_hash) {
    error.password_hash = "Enter a password";
  } else if (!password_pattern.test(values.password_hash)) {
    error.password_hash =
      "Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, and a number";
  }

  if (!values.location) {
    error.location = "Select a location";
  }
  return error;
}
