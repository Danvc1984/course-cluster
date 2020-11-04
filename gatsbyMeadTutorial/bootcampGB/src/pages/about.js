import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"
const aboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h2>About Us</h2>
      <p>This is my first Gatsby generated site</p>
      <p>
        Impressed?, <Link to="/contact">contact me.</Link>
      </p>
    </Layout>
  )
}

export default aboutPage
