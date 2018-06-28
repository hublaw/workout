import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { exerciseUpdate } from '../actions';

class CreateExercise extends Component {
  onExerciseChange = (text) => {
    this.props.exerciseUpdate(text);
  }

  doneCreate = () => {
  console.log(`Adding ${this.props.exercise}`);
  }

  render() {
    console.log(this.props);
    return (
      <Card>
        <CardSection>
          <Input
            label="Exercise"
            placeholder="Bicep Curl"
            onChangeText={this.onExerciseChange}
            value={this.props.exercise}
          />
        </CardSection>
        <CardSection>
          <Button action={this.doneCreate}>
            Done
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const { exercise } = state.workout;
  return { exercise };
};

export default connect(mapStateToProps, { exerciseUpdate })(CreateExercise);
