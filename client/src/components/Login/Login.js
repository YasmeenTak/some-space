import React, { Component } from "react";
import axios from "axios";
// import { Redirect } from "react-router-dom";
import "./style.css";
import { createBrowserHistory } from "history";
export default class Login extends Component {
  state = {
    email: "",
    password: "",
    redirect: null,
    token: null,
    isLoggedIn: false,
  };
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleClick() {
    const history = createBrowserHistory();
    axios
      .post("/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((result) => {
        console.log(result.data);
        console.log("redirect to Home");
        console.log(result.data.token, "tooooooooken");
        this.setState({ token: result.data.token });
        localStorage.setItem("token", this.state.token);
        // this.setState({ redirect: '/' });
        // }
        console.log("Logged in");
        this.setState({ isLoggedIn: true });
        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log("err in logging in ", err);
        alert("No such User !, create a new account");
      });
  }
  render() {
    // if (this.state.redirect) {
    //   console.log('redirected');
    //   return <Redirect to='/' />;
    // }
    return (
      <div className="Login-page__div">
        <label htmlFor="email" className="Login-page__label">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder=""
          className="Login-page__input"
          onChange={this.handleChange.bind(this)}
        />
        <label htmlFor="password" className="Login-page__label">
          password
        </label>
        <input
          name="password"
          type="password"
          placeholder=""
          className="Login-page__input"
          onChange={this.handleChange.bind(this)}
        />
        <button
          className="Login-page__button"
          onClick={this.handleClick.bind(this)}
        >
          login
        </button>
      </div>
    );
  }
}
