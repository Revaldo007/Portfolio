import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  
  function validation() {
    const newError = {};
    if (!formData.name.trim()) {
      newError.name = "Name is required"
    }
    if (formData.name.length > 20) {
      newError.name = "Name can't exceed 20 character's"
    }
   
    if (!formData.email.endsWith("@gmail.com")) {
      newError.email = "Email must end with @gmail.com"
    }
    if (formData.password.length < 6) {
      newError.password = "Password must be atleast 6 character's"
    }
    return newError;
  }
  function handleSubmit(e) {
    e.preventDefault();

    const validationError = validation();
    
    if (Object.keys(validationError).length > 0) {
      setError(validationError);
    }else{
      setError({});
      alert("Form submitted Successfully");
      console.log(formData);
    }
    setFormData({
      name:"",
      email:"",
      password:""
    });

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >Name:</label>
        <input
         id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          required
          onChange={handleChange}
        />
        {error.name && <p style={{color:"red"}}>{error.name}</p>}
        <br /><br />

        <label >Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          required
          onChange={handleChange}
        />
        {error.email && <p style={{color:"red"}}>{error.email}</p>}
        <br /><br />

        <label>password:</label>
        <input
        id="pass"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        />
        {error.password &&<p style={{color:"red"}}>{error.password}</p>}
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
