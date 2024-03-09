import { useState } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import FormInput from "./FormInput";
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      errorMessage: "Enter Correct Password",
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="login_info">
              <form onSubmit={handleSubmit}>
                <h2 className="log-title">Log In to MAIA</h2>
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
                <div className="col-12 mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <button type="submit" className="btn btn-primary log-in-btn">
                    Log In
                  </button>
                  <Link to="/register" className="nav-link">
                    <input
                      type="button"
                      className="btn btn-primary register-btn"
                      value="Register"
                    />
                  </Link>
                </div>
                <div className="col-12 mb-3">
                  <p className="text-center">
                    Forgot <Link to="/forgot-password">Password?</Link>
                  </p>
                </div>
                <SocialMedia />
              </form>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <div className="login_quote">
              <figure>
                <blockquote className="blockquote">
                  <p>
                    "The speed of MAIA’s answers is relative to the speed of my
                    questions."
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <cite title="Source Title">S. O’Neal</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
