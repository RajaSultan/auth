import { useState } from "react";

const InputValidation = (validateValue) => {
  const [formData, setFormData] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(formData);
  const hasError = !isValid && isTouched;

  const valueChange = (event) => {
    setFormData(event.target.value);
  };

  const inputBlur = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setFormData("");
    setIsTouched(false);
  };

  return {
    value: formData,
    isValid: isValid,
    hasError,
    valueChange,
    inputBlur,
    reset,
  };
};

export default InputValidation;
