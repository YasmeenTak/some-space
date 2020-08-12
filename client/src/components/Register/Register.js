import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import { Redirect } from 'react-router-dom';
export default class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    redirect: null,
    errors: {},
  };
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submit(e) {
    e.preventDefault();
    // console.log(this.state);
    axios
      .post('/register', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
      })
      .then((result) => {
        // console.log(result, "result");
        const errors = result.data;
        this.setState({ errors });
        this.setState({ redirect: '/login' });
        //this.props.handleLogin();
      })
      .catch((err) => {
        // console.log("err in sending data from axios to db: ", err);
        console.log(err);
      });
  }
  render() {
    {
      console.log(this.state.errors);
    }
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    const { errors } = this.state;
    return (
      <div>
        <div className='SignUp-page__div'>
          <label htmlFor='email' className='SignUp-page__label'>
            First Name
          </label>
          <input
            name='firstName'
            placeholder=''
            className='SignUp-page__input'
            onChange={this.handleChange.bind(this)}
          />
          <p>{errors['firstName'] ? errors.firstName : null}</p>
          <label htmlFor='email' className='SignUp-page__label'>
            Last Name
          </label>
          <input
            name='lastName'
            placeholder=''
            className='SignUp-page__input'
            onChange={this.handleChange.bind(this)}
          />
          <p>{errors['lastName'] ? errors.lastName : null}</p>
          <label htmlFor='email' className='SignUp-page__label'>
            Email
          </label>
          <input
            name='email'
            type='email'
            placeholder=''
            className='SignUp-page__input'
            onChange={this.handleChange.bind(this)}
          />
          <p>{errors['email'] ? errors.email : null}</p>
          <label htmlFor='password' className='SignUp-page__label'>
            Password
          </label>
          <input
            name='password'
            type='password'
            placeholder=''
            className='SignUp-page__input'
            onChange={this.handleChange.bind(this)}
          />
          <p>{errors['password'] ? errors.password : null}</p>
          <label htmlFor='password2' className='SignUp-page__label'>
            Confirm Password
          </label>
          <input
            name='password2'
            type='password'
            placeholder=''
            className='SignUp-page__input'
            onChange={this.handleChange.bind(this)}
          />
          <p>{errors['password2'] ? errors.password2 : null}</p>
          <button
            className='SignUp-page__button'
            onClick={this.submit.bind(this)}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}
