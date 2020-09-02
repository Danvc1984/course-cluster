import React from "react"
import { Link } from "gatsby"
export default function Home() {
  return (
    <>
      <h1>Hello there...</h1>
      <h2>General Kenobi!!!</h2>
      <p>
        Need a dev or star wars fan?, <Link to="/contact">contact me.</Link>
      </p>
    </>
  )
}
