import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
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

  // render helper functions
  renderError = () => {
    const { error } = this.props;
    if (error) {
      return (
        <Text style={styles.errorTextStyle}>{error}</Text>
      );
    }
  }
  renderInfo = () => {
    const { info } = this.props;
    if (info) {
      return (
        <Text style={styles.infoTextStyle}>{info}</Text>
      );
    }
  }
  renderButtons = () => {
    const { loading } = this.props;

    if (loading) {
      return (
        <CardSection>
          <Spinner size="large" />
        </CardSection>
      );
    }

      return (
        <View>
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
        </View>
      );
    };

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

        {this.renderError()}
        {this.renderInfo()}
        {this.renderButtons()}

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16
  },
  infoTextStyle: {
    color: 'green',
    textAlign: 'center',
    fontSize: 16
  }
};

const mapStateToProps = state => {
  const { email, password, error, user, info, loading } = state.auth;
  return { email, password, error, user, info, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, registerUser, resetPassword
})(LoginForm);
