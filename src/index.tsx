import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import App from "./App"
import storeConfig from "./store/storeConfig"

const { reduxStore, reduxPersistor } = storeConfig()

ReactDOM.render(
  <Provider store={reduxStore}>
    <PersistGate loading={null} persistor={reduxPersistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("app")
)
