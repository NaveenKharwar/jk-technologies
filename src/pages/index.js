import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Front Page Component
import Hero from "../components/sections/hero"
import Features from "../components/sections/features"
import Services from "../components/sections/services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features />
    <Services />
  </Layout>
)

export default IndexPage
