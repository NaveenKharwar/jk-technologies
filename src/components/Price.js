import React, { Component } from "react"
import PriceCard from "./sections/PriceCard"
import send from "../images/send.png"
import airplane from "../images/airplane.png"
import helicopter from "../images/helicopter.png"
import launch from "../images/launch.png"
import jet from "../images/private-jet.png"

import { FaCheck } from "react-icons/fa"

export default class Price extends Component {
  render() {
    return (
      <>
        <section id="price" className="price">
          <div className="container">
            <div className="section-header">
              <h1>
                WIRELESS & FIBRE INTERNET TO FIT <span> EVERYONE! </span>
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
                  imgUrl: send,
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
                  imgUrl: airplane,
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
                  imgUrl: helicopter,
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
                  imgUrl: launch,
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
                  imgUrl: jet,
                  bandWidth: "Bandwidth 100 MB",
                  usage: "Monthly Usage Unlimited",
                  validity: "Validity 30 Days",
                  price: 2200,
                }}
              />
            </div>
          </div>
        </section>
        <section id="terms-conditions" class="terms-conditions mt-10 mx-5">
          <div className="container">
            <div className="w-full">
              <div className="bg-primaryColor text-white rounded overflow-hidden shadow-lg px-10 py-5">
                <h2 className="underline">Terms & Conditions</h2>
                <ul>
                  <li>
                    <FaCheck /> Installation, Activation & Package charges are
                    payable in advance.
                  </li>
                  <li>
                    <FaCheck /> Installation & Activation charges are not
                    refundable.
                  </li>

                  <li>
                    <FaCheck /> Data carry forward facility will only be
                    available on the same existing plans.
                  </li>
                  <li>
                    <FaCheck /> All Plans are valid for 30 Days only.
                  </li>
                  <li>
                    {" "}
                    <FaCheck /> Speed indicated are only upto the ISP nodes.
                  </li>
                  <li>
                    <FaCheck /> GST would be charged as per government norms.
                  </li>
                  <li>
                    <FaCheck /> Plans can vary based on infrastructure and area
                    topology.
                  </li>
                  <li>
                    <FaCheck /> Online Renewal facility can vary based on
                    infrastructure and area topology.
                  </li>
                  <li>
                    <FaCheck /> Documentation (Address Proof, Photo ID Proof,
                    CAF & Photograph) is mandatory before activation.
                  </li>
                  <li>
                    <FaCheck /> Customers are requested t renew their Plans
                    within expiry date to carry forward balance data of their
                    respective limited plans.
                  </li>
                  <li>
                    <FaCheck /> Divices are company property and you have to
                    submit it in working condition while discontinuation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
