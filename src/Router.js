import React from 'react'
import {
	BrowserRouter,
	Switch,
	Route
} from 'react-router-dom'

import About from './views/About'
import Blog from './views/Blog'
import Contacts from './views/Contacts'
import Home from './views/Home'

export default function Router(props) {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </BrowserRouter>
    )
      

}