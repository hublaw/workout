import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import {
  emailChanged,
  passwordChanged,
  loginUser,
  registerUser,
  resetPassword
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
  onForgetClick = () => {
    const { email } = this.props;
    this.props.resetPassword({ email });
  }

  render() {
    console.log(this.props);
    const { email, password } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="train@fit.com"
            onChangeText={this.onEmailChange}
            value={email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={password}
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
  emailChanged, passwordChanged, loginUser, registerUser, resetPassword
})(LoginForm);
