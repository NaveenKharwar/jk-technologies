import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  FaPhone,
  FaMobileAlt,
  FaEnvelopeOpen,
  FaLocationArrow,
} from "react-icons/fa"

import GMap from "../components/map"
import ContactForm from "../components/contactform"
const Contact = () => (
  <Layout>
    <SEO title="Contact us" />
    <div className="container">
      <section className="contact__page">
        <div className="flex flex-wrap mb-4">
          <div className="google_map-container">
            <GMap />
          </div>
          <div className="contact-from">
            <h4 className="text-center">Contact Us</h4>
            <p className="text-center">
              Got a question? We'd love to hear from you. Send us a message and
              we'll repsond as soon as possible.
            </p>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="contact-details">
          <h1 className="text-center mt-5">Contact details</h1>
          <div className="flex flex-wrap">
            <div className="contact__phone ">
              <FaPhone size={35} />
              <ul className="mt-5">
                <h6>For Support:-</h6>
                <li>
                  <div>
                    <FaMobileAlt />
                    +91-7250104637
                  </div>
                </li>
                <h6>For Sales:-</h6>
                <li>
                  <div>
                    <FaMobileAlt />
                    +91-8145777326
                  </div>
                </li>
                <li>
                  <div>
                    <FaMobileAlt />
                    +91-8372837449
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact__email ">
              <FaEnvelopeOpen size={35} className="mb-5" />
              admin@jktech.network
            </div>
            <div className="contact__address ">
              <FaLocationArrow size={35} className="mb-5" />
              <p>
                jk Technologies, <br />
                DAC office road, Tikjuk, geyzing, <br />
                west sikkim, 737111
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Contact
