import React, { useState } from "react";
import './LogIn.css';

function LogIn() {
  const [isLogIn, setLogIn] = useState(true);
  const [isError, setError] = useState(false);
  const [printError, setTextError] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    pass: "",
    newusername: "",
    newpass: "",
    confirmpass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogIn) {
      if(formData.username.length === 0) {
        setError(true);
        setTextError("UserName can't be Empty");
      } else if(formData.password.length) {
        setError(true);
        setTextError("Incorrect Password.");
      }
    } else {
      if(formData.newusername.length === 0) {
        setError(true);
        setTextError("UserName can't be Empty");
      } else if(formData.newpass.length < 6) {
        setError(true);
        setTextError("Password length should be between 6 to 15 characters.");
      } else if(formData.newpass !== formData.confirmpass) {
        setError(true);
        setTextError("Password are not matching");
      }
    }
  };

  const handleClick = () => {
    setLogIn(!isLogIn);
    setError(false);
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Welcome to Chatroom</h1>
          <div>
            <h3>{isLogIn ? "Log In" : "Sign In"}</h3>
            <div id="details">
              <div id="left">
                {isLogIn && (
                  <>
                    <label htmlFor="username">User Name</label>
                    <label htmlFor="pass">Password</label>
                  </>
                )}
                {!isLogIn && (
                  <>
                    <label htmlFor="newusername">User Name</label>
                    <label htmlFor="newpass">Password</label>
                    <label htmlFor="confirmpass">Re-Confirm Password</label>
                  </>
                )}
              </div>
              <div id="right">
                {isLogIn && (
                  <>
                    <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
                    <input type="password" name="pass" id="pass" value={formData.pass} onChange={handleChange} />
                  </>
                )}
                {!isLogIn && (
                  <>
                    <input type="text" name="newusername" id="newusername" value={formData.newusername} onChange={handleChange} />
                    <input type="password" name="newpass" id="newpass" value={formData.newpass} onChange={handleChange} />
                    <input type="password" name="confirmpass" id="confirmpass" value={formData.confirmpass} onChange={handleChange} />
                  </>
                )}
              </div>
            </div>
            {isError && (
              <h4 style={{color: "red"}}>{printError}</h4>
            )}
          </div>
          <div id="form-button">
            <button type="submit" onClick={isLogIn ? handleSubmit : handleClick}> Log In
            </button>
            <button type="submit" onClick={!isLogIn ? handleSubmit : handleClick}>
              Sign In
            </button>
          </div>
          {isLogIn && (
            <p onClick={handleClick}>Don't have an account? Register Here</p>
          )}
          {!isLogIn && (
            <p onClick={handleClick}>Already have an account? Log In Here</p>
          )}
        </form>
      </div>
    </>
  );
}

export default LogIn;
