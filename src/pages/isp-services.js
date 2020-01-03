import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Price from "../components/Price"

const ISPServices = () => (
  <Layout>
    <SEO title="ISP Price and Availability" />
    <div className="container">
      <Price />
    </div>
  </Layout>
)

export default ISPServices
