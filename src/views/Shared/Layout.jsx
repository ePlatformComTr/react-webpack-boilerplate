import React, { Component, PropTypes } from 'react'
import Button from '../../components/Button'
import { browserHistory } from 'react-router'
import './Layout.scss';
class Layout extends Component {
  render(){
    return (
    <main>
      <ul className="layout-nav">
        <li><Button type="button" label="Home" onClick={() => { browserHistory.push('/') }}/></li>
        <li><Button type="button" label="Random" onClick={() => { browserHistory.push('/hello' + Math.floor((Math.random() * 10) + 1)) }} /></li>
      </ul>
      {this.props.children}
    </main>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node
}
export default Layout;
