import { useState, useEffect } from 'react';

const useContact = (callback, validate, initialForm) => {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reset = () => {
    setValues(initialForm);
  };

  // "name" is the LoginForm input "name" (name, email,...)
  // "event.target" get all data "value" introduced in the input by "name"
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Prevent default page to be rendered & put errors values in "errors"
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  // Check when ever erros change & if errors = 0 & isSubminitting = "true" => callback (submit):
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    reset,
  };
};

export default useContact;
