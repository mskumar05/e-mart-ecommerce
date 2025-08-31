import React from "react"
import "./App.css"
import LandingPage from "./stores/pages/LandingPage"
import { AppProvider } from "./stores/context/AppContext"

const App = () => {
  return (
    <AppProvider>
      <div>
        <LandingPage />
      </div>
    </AppProvider>
  )
}

export default App