import { useState } from "react";
import "./contact.css";

function Contact() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleFormSwitch = () => setIsSignUp(!isSignUp);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="contact-wrapper">
      <div className="main">
        
        {/* SIGN UP */}
        <div className={`container a-container ${isSignUp ? "is-txl" : ""}`}>
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="form_title title">Create Account</h2>

            <span className="form__span">or use email for registration</span>
            <input type="text" className="form__input" placeholder="Name" />
            <input type="text" className="form__input" placeholder="Email" />
            <input type="password" className="form__input" placeholder="Password" />

            <button className="form__button button submit">SIGN UP</button>
          </form>
        </div>

        {/* SIGN IN */}
        <div className={`container b-container ${isSignUp ? "is-txl is-z200" : ""}`}>
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="form_title title">Sign in to Website</h2>

            <span className="form__span">or use your email account</span>
            <input type="text" className="form__input" placeholder="Email" />
            <input type="password" className="form__input" placeholder="Password" />

            <a className="form__link" href="#">Forgot your password?</a>

            <button className="form__button button submit">SIGN IN</button>
          </form>
        </div>

        {/* SWITCH PANEL */}
        <div className={`switch ${isSignUp ? "is-txr" : ""}`}>
          
          <div className="switch__circle"></div>
          <div className="switch__circle switch__circle--t"></div>

          {/* LEFT PANEL */}
          <div className={`switch__container ${isSignUp ? "is-hidden" : ""}`}>
            <h2 className="switch__title title">Welcome Back!</h2>
            <p className="switch__description description">
              To keep connected with us please login with your personal info
            </p>
            <button className="switch__button button switch-btn" onClick={handleFormSwitch}>
              SIGN IN
            </button>
          </div>

          {/* RIGHT PANEL */}
          <div className={`switch__container ${!isSignUp ? "is-hidden" : ""}`}>
            <h2 className="switch__title title">Hello Friend!</h2>
            <p className="switch__description description">
              Enter your personal details and start journey with us
            </p>
            <button className="switch__button button switch-btn" onClick={handleFormSwitch}>
              SIGN UP
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;
