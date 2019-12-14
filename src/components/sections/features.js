import React, { Component } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import FeaturesCard from "./FeaturesCard"

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
              imgUrl:
                "static/d89532f7e2e07ccaf747762e53004b9c/7e783/forever.png",
              title: "Unlimited Data",
              content:
                "We bring unbeatable broadband plans at your doorstep with upto 100 Mbps speed with unlimited download as well as upload data",
            }}
          />
          <FeaturesCard
            data={{
              imgUrl: "static/408d7be52a16d6b629b6ca17295c7bd6/7e783/fun.png",
              title: "Uninterupted Service",
              content:
                "Enjoy unbeatable internet service with our Gigabit Passive Optical Network (GPON) based fiber & wireless to the home or fiber to the premises technology",
            }}
          />
          <FeaturesCard
            data={{
              imgUrl:
                "static/a904e0d637e019efcd74204706205c05/7e783/thumbs-up.png",
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
