import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection } from './common';

class Landing extends Component {
  startNew = () => {
    Actions.newWorkout();
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Button action={this.startNew}>
            Start a new workout
          </Button>
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
