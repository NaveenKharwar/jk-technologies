import React, { Component } from "react"
import unlimited from "../../images/smart-house.png"
import router from "../../images/router.png"
import cctv from "../../images/cctv.png"
import phone from "../../images/phone.png"
import television from "../../images/television.png"
import laptop from "../../images/laptop.png"

import { FaAngleRight } from "react-icons/fa"

import ServicesCard from "../sections/ServicesCard"
import { Link } from "gatsby"

export default class Services extends Component {
  render() {
    return (
      <section id="services" className="mt-20 services">
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
        <div className="flex flex-wrap mb-4">
          <ServicesCard
            data={{
              imgUrl: unlimited,
              title: "Unlimited Data",
              content:
                "More than 10 million homes worldwide already have fiber-to-the-home broadband connections because the technology",
              linkUrl: "unlimited-data",
            }}
          />
          <ServicesCard
            data={{
              imgUrl: router,
              title: "High Speed Fiber Internet",
              content:
                "Lighting High Speed Internet is being experienced by the users, Tripleplay provides upto100 Mbps speed in a very low price",
              linkUrl: "unlimited-data",
            }}
          />
          <ServicesCard
            data={{
              imgUrl: cctv,
              title: "CCTV",
              content:
                "CCTV Camera Pros featured products based on price, quality and customer satisfaction.",
              linkUrl: "unlimited-data",
            }}
          />
        </div>
        <div className="flex flex-wrap mb-5">
          <ServicesCard
            data={{
              imgUrl: phone,
              title: "Intercom",
              content: "IPPhone IPBX IPBX",
              linkUrl: "Intercom",
            }}
          />
          <ServicesCard
            data={{
              imgUrl: television,
              title: "Digital HD Cable TV (CTV)",
              content:
                "We gives more than 300 Digital and HD channels not as much as cost of DTH and have tie-up with numerous MSO",
              linkUrl: "unlimited-data",
            }}
          />
          <ServicesCard
            data={{
              imgUrl: laptop,
              title: "Enterprise",
              content:
                "Effective network is as critical as consistent availability for organizations, and this is the where shared web lines vacillate",
              linkUrl: "unlimited-data",
            }}
          />
        </div>
        <Link className="btn" to="/services">
          <span>Check Our All Services</span>
          <FaAngleRight />
        </Link>
      </section>
    )
  }
}
