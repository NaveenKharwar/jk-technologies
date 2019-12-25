import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TransparentLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "jk-tech.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div style={{ width: "180px" }}>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
}

export default TransparentLogo
