import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
const aboutPage = () => {
  return (
    <Layout>
      <h2>About Us</h2>
      <p>This is my first Gatsby generated site</p>
      <p>
        Impressed?, <Link to="/contact">contact me.</Link>
      </p>
    </Layout>
  )
}

export default aboutPage
