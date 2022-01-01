import React from 'react'
import { Route, HashRouter, Redirect } from 'react-router-dom';
import { DataService } from './DataService'
import { connectGallery } from './Features/Gallery/connectGallery'
import { connectHeader } from './Features/Header/connectHeader'

export const Router = () => {
  const Header = connectHeader()
  const Gallery = connectGallery({ DataService })
  const Drums = () => <p style={{ color: 'white' }}>Drums...</p>
  const Dev = () => <p style={{ color: 'white' }}>Dev...</p>

  return (
    <HashRouter basename="/">
      <header>
        <Header />
      </header>
      <main>
        <Route path='/photos' component={Gallery} />
        <Route path='/drums' component={Drums} />
        <Route path='/dev' component={Dev} />
        <Route exact path='/' component={Gallery} />
        <Redirect to="/" />
      </main>
    </HashRouter>
  )
}