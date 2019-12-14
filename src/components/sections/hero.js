import React, { Component } from "react"
import { Link } from "gatsby"
import Image from "../image"

import { FaAngleDown } from "react-icons/fa"

export default class Hero extends Component {
  render() {
    return (
      <header>
        <div className="flex items-center">
          <div className="w-1/2">
            <p className="text-gray-700 uppercase font-semibold">
              Best Internet Provider in Sikkim
            </p>
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
              <span>our services</span>
              <FaAngleDown />
            </Link>
            <p>Get one-to-one consultation in less than 24h.</p>
          </div>
          <div className="w-1/2 flex justify-center">
            <div style={{ width: `800px` }}>
              <Image />
            </div>
          </div>
        </div>
      </header>
    )
  }
}
