import { useState } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import FormInput from "./FormInput";
const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: "",
  });

  const input = [
    {
      id: 1,
      name: "email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="login_info">
              <form action="#">
                <h2 className="log-title">Forgot password</h2>
                {input.map((input) => {
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                  />;
                })}
                <div className="col-12 mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary register-btn"
                  >
                    Reset Password
                  </button>
                </div>
                <div className="col-12 mb-3">
                  <p className="text-center">
                    Follow the instructions in the recovery email. If you still
                    have issues, please <Link to="/contact">Contact Us.</Link>
                  </p>
                </div>
                <div className="col-12">
                  <p className="text-center dog-text">
                    Was it the name of your dog? <Link to="/">Log In </Link>
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
                    "Thanks to MAIA, we knew the water temperature in the
                    Hudson. Cold."
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <cite title="Source Title">C. Sully</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
