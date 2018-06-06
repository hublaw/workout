import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

export default class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="train@fit.com"
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
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
