import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import  { store } from './store'

import App from './App'
import './index.css'
import { PokemonApp } from './PokemonApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <PokemonApp/>
    {/* <App /> */}
  </Provider>
  </React.StrictMode>
)
