import { all } from "redux-saga/effects"
import { AuthSaga } from "webpack-react-base-auth"

export function* rootSaga(): Generator {
  yield all([...AuthSaga])
}
