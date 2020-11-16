// TODO: Add Password 2 and validate

export default function validateLogin(values) {
  let namePattern = /^[a-zA-Z ]+$/;
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  let errors = {};
  // Name
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (!namePattern.test(values.name)) {
    errors.name = 'Name is invalid';
  } else if (values.name.length < 3) {
    errors.name = 'Name lenght is invalid > 3';
  }
  // Email
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  // Password
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password needs to be more than 8 characters';
  }
  // Password2
  if (!values.password2) {
    errors.password2 = 'Password2 is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords needs to match';
  }
  return errors;
}
