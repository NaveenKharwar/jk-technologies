import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// Front Page Component
import Hero from "../components/sections/hero"
import Services from "../components/sections/services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Services />
    <h1>Hi people</h1>

    <h1>This is H1</h1>
    <h2>This is H2</h2>
    <h3>This is H3</h3>
    <h4>This is H4</h4>
    <h5>This is H5</h5>
    <h6>This is H6</h6>

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
