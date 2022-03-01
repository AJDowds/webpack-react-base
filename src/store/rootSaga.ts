import { all } from "redux-saga/effects"
import { Testo, AuthSaga } from "webpack-react-base-auth"

export function* rootSaga(): Generator {
  yield all([...AuthSaga])
}
