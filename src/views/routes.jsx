import React, { PropTypes, Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import { Layout, Home, NotFound } from './'

export default (
  <Route  component={Layout}>
      <Route component={Home} path="/" title="Home" />
      <Route path="*" component={NotFound} title="Page Not Found" />
  </Route>
);
