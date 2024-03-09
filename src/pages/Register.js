import { useState } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import FormInput from "./FormInput";
import emailjs from "emailjs-com";
import SendEmail from "../emails/SendEmail";
const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
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
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id: 4,
      name: "username",
      type: "text",
      errorMessage: "Please Enter Name",
      label: "Username",

      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tnpp5vi",
        "template_knziin1",
        e.target,
        "IkZRLENHxbeCF_qZy"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="login_info regform">
              <form onSubmit={handleSubmit}>
                <h2 className="log-title">Register to MAIA</h2>
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
                      I agree with the{" "}
                      <Link to="/privacy-policy">Terms and Privacy Policy</Link>
                    </label>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary register-btn"
                  >
                    Register
                  </button>
                </div>
                <div className="col-12 mb-3">
                  <p className="text-center">
                    Already Registered? <Link to="/">Log In</Link>
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
                    "MAIA helped me clone a bumblebee, and split an atom all at
                    the same time"
                  </p>
                </blockquote>
                <figcaption classNameName="blockquote-footer">
                  <cite title="Source Title">J.Deere</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
