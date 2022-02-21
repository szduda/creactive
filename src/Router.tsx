import React from 'react'
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom'
import { DataService } from './DataService'
// import { connectGallery } from './Features/Gallery'
import { connectDrummery } from './Features/Drummery'
import { connectHeader } from './Features/Header'

export const Router = () => {
  const Header = connectHeader()
  // const Gallery = connectGallery({ DataService })
  const Drummery = connectDrummery({ DataService })
  // const Dev = () => <p style={{ color: 'white' }}>Dev...</p>

  return (
    <HashRouter>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route path="/:slug" component={Drummery} />
          <Route exact path="/" component={Drummery} />
          {/* <Route path='/photos' component={Gallery} /> */}
          {/* <Route path='/dev' component={Dev} /> */}
          <Redirect to="/" />
        </Switch>
      </main>
    </HashRouter>
  )
}
