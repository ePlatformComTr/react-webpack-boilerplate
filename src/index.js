import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './views/routes'

class App extends Component {
  render(){
    return (
        <Router routes={routes} history={browserHistory} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
