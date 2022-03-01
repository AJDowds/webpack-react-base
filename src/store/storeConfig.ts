import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { persistStore, persistReducer } from "redux-persist"
import { createLogger } from "redux-logger"
import storage from "redux-persist/lib/storage"
import thunkMiddleware from "redux-thunk"
import reduxSaga from "redux-saga"

import { apiHelper } from "./baseApiService"
import { rootSaga } from "./rootSaga"

import { AuthSlice } from "webpack-react-base-auth"

const persistConfig = {
  key: "my-app",
  storage,
  blacklist: ["app"],
}

const sagaMiddleware = reduxSaga({
  context: {
    apiHelper,
  },
})

export const reducers = {
  auth: AuthSlice.reducer,
}

const combineReducer = combineReducers(reducers)

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = undefined
  }

  return combineReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const loggerMiddleware = createLogger()

export default function storeConfig(preloadedState?) {
  const middlewares = [sagaMiddleware, loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const composedEnhancers = composeWithDevTools(middlewareEnhancer)
  const reduxStore = createStore(
    persistedReducer,
    preloadedState,
    composedEnhancers
  )
  sagaMiddleware.run(rootSaga)
  const reduxPersistor = persistStore(reduxStore)
  return { reduxStore, reduxPersistor }
}
