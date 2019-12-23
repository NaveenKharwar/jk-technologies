import React, { Component } from "react"
import FeaturesCard from "./FeaturesCard"
import forever from "../../images/forever.png"
import fun from "../../images/fun.png"
import thumbsup from "../../images/thumbs-up.png"

export default class Features extends Component {
  render() {
    return (
      <section id="features" className="mt-20">
        <div className="section-header">
          <h1>
            fall in love with our <span> features </span>
          </h1>
          <p>
            We envision a world where broadband connectivity is readily
            available in rural areas and transforms lives.
          </p>
        </div>

        <div className="flex mb-4">
          <FeaturesCard
            data={{
              imageid: "image1.childImageSharp.fluid",
              imgUrl: forever,
              title: "Unlimited Data",
              content:
                "We bring unbeatable broadband plans at your doorstep with upto 100 Gbps speed with unlimited download as well as upload data",
            }}
          />
          <FeaturesCard
            data={{
              imgUrl: fun,
              title: "Uninterupted Service",
              content:
                "Enjoy unbeatable internet service with our Gigabit Passive Optical Network (GPON) based fiber & wireless to the home or fiber to the premises technology",
            }}
          />
          <FeaturesCard
            data={{
              imgUrl: thumbsup,
              title: "Gateway Redundancy",
              content:
                "We are connected to the cloud network through various upstream providers to ensure internet gateway redundancy and low latencym.",
            }}
          />
        </div>
      </section>
    )
  }
}
