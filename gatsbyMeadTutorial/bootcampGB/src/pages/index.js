import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
export default function Home() {
  return (
    <Layout>
      <h2>Hello there...</h2>
      <h3>General Kenobi!!!</h3>
      <p>
        Need a dev or star wars fan?, <Link to="/contact">contact me.</Link>
      </p>
    </Layout>
  )
}
