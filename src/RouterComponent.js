import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Landing from './components/Landing';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" titleStyle={{ textAlign: 'center', width: '90%' }} hideNavBar>

        <Scene key="auth" initial>
          <Scene key="login" component={LoginForm} title="Log In" />
        </Scene>

        <Scene key="main">
          <Scene key="landing" component={Landing} title="Work Out" initial />
        </Scene>


    </Scene>
    </Router>
  );
};

export default RouterComponent;
