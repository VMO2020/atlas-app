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
    errors.name = 'Name needs to be more than 3 characters';
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
  return errors;
}
