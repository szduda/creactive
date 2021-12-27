import React from 'react'
import { Header } from './Header'
import { useStore } from '../../StateManager/Store'

export const connectHeader = () => {
  const context = () => {
  }

  return () => <Header {...{ context }} />
}