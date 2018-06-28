import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

class Workout extends Component {
  addExercise = () => {
    Actions.createExercise();
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Button
            style={styles.buttonStyle}
            action={this.addExercise}
          >
            + Add Exercise
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  buttonStyle: {
    backgroundColor: '#fff',
    marginLeft: 10,
  }
};

export default Workout;
