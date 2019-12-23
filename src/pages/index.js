import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// Front Page Component
import Hero from "../components/sections/hero"
import Features from "../components/sections/features"
import Services from "../components/sections/services"
import CallToAction from "../components/sections/callToAction"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features />
    <Services />
    {/* <CallToAction /> */}
  </Layout>
)

export default IndexPage
