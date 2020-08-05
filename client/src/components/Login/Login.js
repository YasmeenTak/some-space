import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    axios
      .post('/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        localStorage.setItem('useremail', response.data.email);
        alert(response.data.message);
        if (response.data.message === 'welcome to our website') {
          this.props.history.push('/homeLand');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mt-5 mx-auto'>
            <form noValidate onSubmit={this.onSubmit}>
              <div className='form-group'>
                <br />
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  placeholder='Email Address'
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <br />
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type='submit'
                className='btn btn-lg btn-primary btn-block'
              >
                <a>Log In</a>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
