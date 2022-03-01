import * as React from "react"
import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./features/Home"

const View = styled.div``

const App = () => {
  return (
    <BrowserRouter>
      <View>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </View>
    </BrowserRouter>
  )
}

export default App
