import {useState} from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [formTouched, setFormTouched] = useState(false);

  const valueIsValid = validateValue(value);
  const hasError = !valueIsValid && formTouched;

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setFormTouched(true);
  };
  
  const reset = () => {
    setValue('')
    setFormTouched(false)
  }

  return {
    value,
    hasError,
    valueIsValid,
    inputBlurHandler, 
    changeHandler,
    reset
  };
};

export default useInput;

