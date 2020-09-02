import React from "react"
import { Link } from "gatsby"

const aboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is my first Gatsby generated site</p>
      <p>
        Impressed?, <Link to="/contact">contact me.</Link>
      </p>
    </div>
  )
}

export default aboutPage
