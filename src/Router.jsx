import React from 'react'
import { Route, HashRouter, Redirect } from 'react-router-dom';
import { DataService } from './DataService'
import { connectGallery } from './Features/Gallery/connectGallery'
import { connectHeader } from './Features/Header/connectHeader'

export const Router = () => {
  const Header = connectHeader()
  const Gallery = connectGallery({ DataService })
  
  return (
    <HashRouter basename="/">
      <header>
        <Header />
      </header>
      <main>
        <Route exact path='/' component={Gallery} />
        <Redirect to="/" />
      </main>
    </HashRouter>
  )
}