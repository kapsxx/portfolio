import React from "react"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  )
}
export default Layout
