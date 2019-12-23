import React, { Component } from "react"

import ServicesCard from "../sections/ServicesCard"
import { Link } from "gatsby"

export default class Services extends Component {
  render() {
    return (
      <section id="services" className="mt-20">
        <div className="section-header">
          <h1>
            Our <span> Services </span>
          </h1>
          <p>
            Looking for CCtv, Optical fiber Networks, Wireless products and
            solutions, video conferencing, tower maintenance, intercom,
            biometrix, hotspot, computer and accessories, AMC, routers. Look no
            further! We cover all.
          </p>
        </div>
        <div className="flex mb-4">
          <ServicesCard
            data={{
              imgUrl:
                "static/2a82a699bec619694c28341b27a343f5/7e783/smart-house.png",
              title: "Unlimited Data",
              content:
                "More than 10 million homes worldwide already have fiber-to-the-home broadband connections because the technology",
              linkUrl: "unlimited-data",
            }}
          />
          <ServicesCard
            data={{
              imgUrl:
                "static/041f7c76d2ea1a62918b16c47bd3c525/7e783/router.png",
              title: "High Speed Fiber Internet",
              content:
                "Lighting High Speed Internet is being experienced by the users, Tripleplay provides upto100 Mbps speed in a very low price",
              linkUrl: "unlimited-data",
            }}
          />
          <ServicesCard
            data={{
              imgUrl: "static/4ff67a311791b9b3f0faf0c13bff51d9/7e783/cctv.png",
              title: "CCTV",
              content:
                "CCTV Camera Pros featured products based on price, quality and customer satisfaction.",
              linkUrl: "unlimited-data",
            }}
          />
        </div>
        <div className="flex mb-5">
          <ServicesCard
            data={{
              imgUrl: "static/aef273a09b15b35167b2b114cc801478/7e783/phone.png",
              title: "Intercom",
              content: "IPPhone IPBX IPBX",
              linkUrl: "Intercom",
            }}
          />
          <ServicesCard
            data={{
              imgUrl:
                "static/0685905b0045cf6232a99fddbcd04324/7e783/television.png",
              title: "Digital HD Cable TV (CTV)",
              content:
                "We gives more than 300 Digital and HD channels not as much as cost of DTH and have tie-up with numerous MSO",
              linkUrl: "unlimited-data",
            }}
          />
          <ServicesCard
            data={{
              imgUrl:
                "static/004ae1ac2f0eac2dcf9ec664e3299c95/7e783/laptop.png",
              title: "Enterprise",
              content:
                "Effective network is as critical as consistent availability for organizations, and this is the where shared web lines vacillate",
              linkUrl: "unlimited-data",
            }}
          />
        </div>
        <Link to="/services">Check Our All Services</Link>
      </section>
    )
  }
}
