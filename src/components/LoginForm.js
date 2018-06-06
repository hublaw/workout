import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  }

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
          <Button action={() => console.log('clicked')}>
            Log In
          </Button>
        </CardSection>
        <CardSection>
          <Button action={() => console.log('clicked')}>
            Register
          </Button>
          <Button action={() => console.log('clicked')}>
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
  emailChanged, passwordChanged
})(LoginForm);
