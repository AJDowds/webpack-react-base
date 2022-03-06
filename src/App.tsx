import * as React from "react"
import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./features/Home/Home"
import { Navbar } from "./features/Nav/Navbar"
import "./assets/css/app.scss"

const View = styled.div`
  height: 100%;
  width: 100%;
`

const App = () => {
  return (
    <BrowserRouter>
      <View>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </View>
    </BrowserRouter>
  )
}

export default App
