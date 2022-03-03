import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Title } from "webpack-react-base-auth"
import { AuthSlice } from "webpack-react-base-auth"
import { AuthState } from "webpack-react-base-auth/dist/Auth/AuthSlice"
import { RootState } from "../store/storeConfig"

export const Home: React.FC = () => {
  const dispatch = useDispatch()
  const user: AuthState = useSelector((state: RootState) => state.auth)

  console.log("!!user", user)

  const handleLogin = () => {
    console.log("!!", "hello")
    dispatch(AuthSlice.actions.login({ username: "a", password: "pass" }))
  }

  return (
    <div>
      <h4>Home, {user ? user.email : ""}</h4>
      <Title />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
