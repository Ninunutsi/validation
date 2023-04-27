import { useState } from 'react';
import './App.css';


function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const [submited, setSubmited] = useState(false)
  const [valid, setValid] = useState(false)

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handlEmailChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handlePasswordChange = (event) => {
    setValues({...values, password: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(values.firstName && values.lastName && values.email && values.password) {
      setValid(true)
    }
    setSubmited(true)
  }

  return (
    <div className="App">
      <form className='form' onSubmit={handleSubmit}>
        <h1 className='heading'>Registration Form</h1>
        {submited && valid ? <div className='success-msg'>Success! Thank you for registration!</div> : null}
        <input 
        type='text' 
        placeholder='First Name' 
        className='input' 
        value={values.firstName}
        onChange={handleFirstNameInputChange}></input>
        {submited && !values.firstName ? <span className='error'>Please enter a first name</span> : null}

        <input type='text' placeholder='Last Name' className='input' 
        value={values.lastName}
        onChange={handleLastNameInputChange}></input>
        {submited && !values.lastName ? <span className='error'>Please enter a last name</span> : null}

        <input type='text' placeholder='Email' className='input' value={values.email}
        onChange={handlEmailChange}></input>
        {submited && !values.email ? <span className='error'>Please enter an email</span> : null}

        <input type='password' placeholder='Password' className='input'value={values.password}
        onChange={handlePasswordChange}></input>
        {submited && !values.password ? <span className='error'>Please enter a password</span> : null}

        <button className='btn'>Register</button>
      </form>
    </div>
  );
}

export default App;

