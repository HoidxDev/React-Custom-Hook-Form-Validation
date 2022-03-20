import useInput from "../Hooks/use-input";

const BasicForm = () => {

  const {
    value: firstNameValue,
    hasError: firstNameHasError,
    changeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    valueIsValid: firstNameIsValid,
    reset: resetFirstNameHandler
  } = useInput(enteredValue => enteredValue.trim() !== '');

  const {
    value: lastNameValue,
    hasError: lastNameHasError,
    changeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    valueIsValid: lastNameIsValid,
    reset: resetLastNameHandler
  } = useInput(enteredValue => enteredValue.trim() !== '');

  const {
    value: mailNameValue,
    hasError: mailNameHasError,
    changeHandler: mailNameChangeHandler,
    inputBlurHandler: mailNameBlurHandler,
    valueIsValid: mailNameIsValid,
    reset: resetMailNameHandler
  } = useInput(enteredValue => enteredValue.includes('@'));

  let formIsValid = false

  if (firstNameIsValid && lastNameIsValid && mailNameIsValid) {
   formIsValid = true
  } 


  const submitHandler = (event) => {
    event.preventDefault();



    resetFirstNameHandler()
    resetLastNameHandler()
    resetMailNameHandler()

    console.log(`First Name: ${firstNameValue}, Last name: ${lastNameValue}, Mail Adress: ${mailNameValue}`)
  };

  const firstNameInputClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const mailNameInputClasses = mailNameHasError ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">

        <div className={firstNameInputClasses}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            value={firstNameValue}
            id="firstname"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}/>
          {firstNameHasError && (<p className="error-text"> First Name must not be empty.</p>)}
        </div>

        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}/>

          {lastNameHasError && (<p className="error-text"> Last Name must not be empty.</p>)}
        </div>

      </div>

      <div className={mailNameInputClasses}>
        <label htmlFor="mailname"> 
          E-Mail Address 
        </label>
        <input
          type="text"
          id="mailname"
          value={mailNameValue}
          onChange={mailNameChangeHandler}
          onBlur={mailNameBlurHandler}/>

          {mailNameHasError && (<p className="error-text"> Please enter a valid email.</p>)}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid} className={!formIsValid ? "disabled" : ""}>
          Submit
        </button>
      </div>

    </form>
  );
};

export default BasicForm;
