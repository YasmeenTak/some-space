const Validator = require('validator');
const isEmpty = require('is-empty');
module.exports = function validateRegisterInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  // data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  // data.lastName = !isEmpty(data.firstName) ? data.lastName : '';
  // data.email = !isEmpty(data.email) ? data.email : '';
  // data.password = !isEmpty(data.password) ? data.password : '';
  // data.password2 = !isEmpty(data.password2) ? data.password2 : '';
  //First/last Name checks
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'first name field is required';
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'last name field is required';
  }
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  // Password checks
  if (Validator.isEmpty(data.password) && Validator.isEmpty(data.password2)) {
    errors.password = 'Password field is required';
    errors.password2 = 'Confirm Password field is required';
  } else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.passwordo = 'Password must be at least 6 characters';
    errors.passwordo2 = 'Password must be at least 6 characters';
  } else if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
    // console.log(
    //   data.password,
    //   data.password2,
    //   'hereeeeeeeeeeeeeeeeeeeeeee in validation'
    // );
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
