import React, { Component } from "react"
import PriceCard from "./sections/PriceCard"
import thumbsup from "../images/thumbs-up.png"

import fireworks from "../images/fireworks.png"

export default class Price extends Component {
  render() {
    return (
      <section id="price" className="price">
        <div className="container">
          <div className="section-header">
            <h1>
              WIRELESS INTERNET TO FIT <span> EVERYONE! </span>
            </h1>
            <p>
              We envision a world where broadband connectivity is readily
              available in rural areas and transforms lives.
            </p>
          </div>

          <div className="flex flex-wrap mb-4">
            <PriceCard
              data={{
                imageid: "image1.childImageSharp.fluid",
                title: "alpha",
                imgUrl: thumbsup,
                bandWidth: "Bandwidth 30 MB",
                usage: "Monthly Usage Unlimited",
                validity: "Validity 30 Days",
                price: 500,
              }}
            />
            <PriceCard
              data={{
                imageid: "image1.childImageSharp.fluid",
                title: "beta",
                imgUrl: thumbsup,
                bandWidth: "Bandwidth 45 MB",
                usage: "Monthly Usage Unlimited",
                validity: "Validity 30 Days",
                price: 650,
              }}
            />
            <PriceCard
              data={{
                imageid: "image1.childImageSharp.fluid",
                title: "gamma",
                imgUrl: fireworks,
                bandWidth: "Bandwidth 60 MB",
                usage: "Monthly Usage Unlimited",
                validity: "Validity 30 Days",
                price: 800,
              }}
            />
            <PriceCard
              data={{
                imageid: "image1.childImageSharp.fluid",
                title: "delta",
                imgUrl: fireworks,
                bandWidth: "Bandwidth 75 MB",
                usage: "Monthly Usage Unlimited",
                validity: "Validity 30 Days",
                price: 1250,
              }}
            />
            <PriceCard
              data={{
                imageid: "image1.childImageSharp.fluid",
                title: "omega",
                imgUrl: fireworks,
                bandWidth: "Bandwidth 100 MB",
                usage: "Monthly Usage Unlimited",
                validity: "Validity 30 Days",
                price: 800,
              }}
            />
          </div>
        </div>
      </section>
    )
  }
}
