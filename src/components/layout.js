import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../css/style.css"

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      />
      <div className="container">
        <main>{children}</main>
        <footer className="mt-20 mb-10 py-32 px-10 bg-black rounded-lg shadow-2xl">
          <div className="container">
            <div class="flex flex-wrap mb-4">
              <div class="widget-area">
                <h5 className="widget-title">Company</h5>
                <ul>
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <Link to="/">about</Link>
                  </li>
                  <li>
                    <Link to="/">services</Link>
                  </li>
                </ul>
              </div>
              <div class="widget-area">
                <h5 className="widget-title">Services</h5>
                <ul>
                  <li>
                    <Link to="/">Unlimited Data</Link>
                  </li>
                  <li>
                    <Link to="/">High Speed Fiber Internet></Link>
                  </li>
                  <li>
                    <Link to="/">CCTV</Link>
                  </li>
                  <li>
                    <Link to="/">Intercom</Link>
                  </li>
                  <li>
                    <Link to="/">Digital HD Cable TB (CTV)</Link>
                  </li>
                  <li>
                    <Link to="/">Enterprise</Link>
                  </li>
                </ul>
              </div>
              <div class="widget-area">
                <h5 className="widget-title">Get in touch</h5>
                <ul>
                  <li>
                    <Link to="/">Contact Form</Link>
                  </li>
                  <li>
                    <Link to="/">Careers</Link>
                  </li>
                </ul>
              </div>
              <div class="widget-area">
                <div className="social-icon">
                  <ul className="flex">
                    <li>
                      <FaFacebookF size={25} />
                    </li>
                    <li>
                      <FaInstagram size={25} />
                    </li>
                    <li>
                      <FaTwitter size={25} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
