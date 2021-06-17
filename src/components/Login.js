import React, { Fragment, useState } from "react";

const { REACT_APP_API_URL } = process.env;

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(`${REACT_APP_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      //console.log("token recieved");
      //console.log(parseRes.token);

      //changed parse.Res.token to jwtToken
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="App">
          <div className="Main">
            <h1 className="text-center">Login</h1>
            <form onSubmit={onSubmitForm}>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control my-3"
                value={email}
                onChange={(e) => onChange(e)}
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                className="form-control my-3"
                value={password}
                onChange={(e) => onChange(e)}
              />
              <div className="font">
                <button className="btn btn-success btn-block">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
