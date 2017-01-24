import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import routes from './views/routes'

class App extends Component {
  render(){
    return (
        <Router routes={routes} history={hashHistory} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
