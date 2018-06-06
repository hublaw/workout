import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import {
  emailChanged,
  passwordChanged,
  loginUser,
  registerUser
} from '../actions';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  }

  // button handlers
  onRegisterClick = () => {
    const { email, password } = this.props;
    this.props.registerUser({ email, password });
  }

  onLoginClick = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  onForgetClick = () => console.log('resetting');


  render() {
    console.log(this.props);
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="train@fit.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button action={this.onLoginClick}>
            Log In
          </Button>
        </CardSection>
        <CardSection>
          <Button action={this.onRegisterClick}>
            Register
          </Button>
          <Button action={this.onForgetClick}>
            Forgot Password
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { email, password } = state.auth;
  return { email, password };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, registerUser
})(LoginForm);
