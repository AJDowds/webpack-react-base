import * as React from "react"

export const Home: React.FC = () => {
  const handleLogin = () => {
    console.log("!!", "hello")
  }

  return (
    <div>
      <h4>Home</h4>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
