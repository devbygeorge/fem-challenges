import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Countries from './components/Countries';
import Country from './components/Country';


const mapStateToProps = props => ({
  theme: props.theme
});

class App extends React.Component {
  render() {
    
    return (
      <div className={`background ${this.props.theme}`}>
        <Header />

        <Switch>
          <Route exact path="/" children={<Countries />} />
          <Route exact path="/:country" children={<Country />} />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
