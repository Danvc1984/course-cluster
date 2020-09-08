import React from "react"
import Header from "./Header"
import Footer from "./footer"

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
