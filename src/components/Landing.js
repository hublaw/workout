import React, { Component } from 'react';
import { Button, Card, CardSection } from './common';

class Landing extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Button>Start a new workout</Button>
        </CardSection>
        <CardSection>
          <Button>Load a saved template</Button>
        </CardSection>
        <CardSection>
          <Button>View workout history</Button>
        </CardSection>
      </Card>
    );
  }
}

export default Landing;
