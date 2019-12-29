import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import Logo from "./logo"
import { FaEnvelopeOpen } from "react-icons/fa"

function Header({ siteTitle, menuLinks }) {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <nav className="bg-white p-2 mt-0 w-full z-10 pin-t ">
      <div className="navigation_container">
        <div className="flex flex-shrink-0 text-black">
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              <Logo />
            </Link>
          </h1>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded text-primaryColor border-primaryColor hover:text-primaryColor hover:border-black"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } main-menu w-full block:lg lg:flex lg:items-center lg:w-auto lg:px-0 px-5 pb-10 lg:shadow-none shadow-2xl`}
        >
          <div className="text-sm lg:flex-grow">
            {menuLinks.map(link => (
              <Link
                key={link.name}
                className="block mt-4 lg:inline-block lg:mt-0 text-black text-lg mr-10"
                to={link.link}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div>
            <Link className="btn nav_cta-btn" to="/contact">
              <span>Contact</span>
              <FaEnvelopeOpen />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
