import {Route, NotFoundRoute, DefaultRoute} from 'react-router'
import React from 'react'
import App from './components/App'
export default (
  <Route ignoreScrollBehavior={true} handler={App}>
    <NotFoundRoute handler={App}/>
    <DefaultRoute handler={App}/>
  </Route>
)
