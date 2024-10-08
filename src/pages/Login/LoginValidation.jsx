export function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    error.email = "Enter your email";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Emails don't match";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Enter a password";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Passwords don't match";
  } else {
    error.password = "";
  }
  return error;
}
