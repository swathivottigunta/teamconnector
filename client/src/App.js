import React, { Fragment, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEduction';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import PrivaeRoute from './components/routing/PrivaeRoute';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from '../src/utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  //  run an effect and clean it up only once - second argument[]
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/Register' component={Register} />
              <Route exact path='/Login' component={Login} />
              <Route exact path='/Profiles' component={Profiles} />
              <Route exact path='/Profile/:id' component={Profile} />
              <PrivaeRoute exact path='/dashboard' component={Dashboard} />
              <PrivaeRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivaeRoute exact path='/edit-profile' component={EditProfile} />
              <PrivaeRoute
                exact
                path='/add-experience'
                component={AddExperience}
              />
              <PrivaeRoute
                exact
                path='/add-education'
                component={AddEducation}
              />
              <PrivaeRoute exact path='/posts' component={Posts} />
              <PrivaeRoute exact path='/posts/:id' component={Post} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
