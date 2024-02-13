import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { injectStores } from '@mobx-devtools/tools'

import { StylesProvider } from '@mui/styles'
import { ThemeProvider } from 'styled-components/macro'
import { theme } from './theme'
import App from './App'
import './index.css'
import Store from './store/store'

import * as process from 'process'
;(window as any).global = window
;(window as any).process = process
;(window as any).Buffer = []

interface State {
  store: Store
}

const store = new Store()

injectStores({
  store,
})

export const Context = createContext<State>({
  store,
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StylesProvider injectFirst>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Context.Provider value={{ store }}>
          <App />
        </Context.Provider>
      </ThemeProvider>
    </BrowserRouter>
  </StylesProvider>,
)
