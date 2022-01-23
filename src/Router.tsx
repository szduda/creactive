import React from 'react'
import { Route, HashRouter, Redirect } from 'react-router-dom';
import { DataService } from './DataService'
import { connectGallery } from './Features/Gallery'
import { connectDrummery } from './Features/Drummery'
import { connectHeader } from './Features/Header'

export const Router = () => {
  const Header = connectHeader()
  const Gallery = connectGallery({ DataService })
  const Drummery = connectDrummery({ DataService })
  const Dev = () => <p style={{ color: 'white' }}>Dev...</p>

  return (
    <HashRouter basename="/">
      {/* <header>
        <Header />
      </header> */}
      <main>
        {/* <Route path='/photos' component={Gallery} /> */}
        <Route path='/drums' component={Drummery} />
        {/* <Route path='/dev' component={Dev} /> */}
        <Redirect to="/drums" />
      </main>
    </HashRouter>
  )
}