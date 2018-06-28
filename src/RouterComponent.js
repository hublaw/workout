import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Landing from './components/Landing';
import Workout from './components/Workout';
import CreateExercise from './components/CreateExercise';

const getDate = () => {
  const d = new Date().getDate();
  const m = new Date().getMonth() + 1;
  const y = new Date().getFullYear();
  return `${d}/${m}/${y}`;
};

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" titleStyle={{ textAlign: 'center', width: '90%' }} hideNavBar>

        <Scene key="auth" initial>
          <Scene key="login" component={LoginForm} title="Log In" />
        </Scene>

        <Scene key="main">
          <Scene
            key="landing"
            component={Landing}
            title="Work Out"
            initial
          />

          <Scene
            key="newWorkout"
            component={Workout}
            title={getDate()}
          />

          <Scene
            key="createExercise"
            component={CreateExercise}
            title="Add Exercise"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
