import React, { Component } from "react"
import { Link } from "gatsby"
import Image from "../image"

export default class Hero extends Component {
  render() {
    return (
      <header>
        <div className="flex items-center mb-4">
          <div className="w-1/2">
            <h5 className="text-gray-700">Best Internet Provider in Sikkim</h5>
            <h1 className="leading-snug font-bold">
              Meet faster, <br />
              more secure web.
            </h1>
            <p>
              J K Technologiesis deals in CCtv, Optical fiber Networks, Wireless
              products and solutions, video conferencing, tower maintenance,
              intercom, biometrix, hotspot, computer and accessories, AMC,
              routers.  
            </p>
            <Link className="btn" to="/services">
              our services
            </Link>
            <p>Get one-to-one consultation in less than 24h.</p>
          </div>
          <div className="w-1/2">
            <div style={{ maxWidth: `100%` }}>
              <Image />
            </div>
          </div>
        </div>
      </header>
    )
  }
}
