import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo"
import { FaPhone } from "react-icons/fa"
const Header = ({ siteTitle, menuLinks }) => (
  <nav className="bg-white p-2 mt-0 w-full z-10 pin-t ">
    <div className="flex container  justify-between flex-wrap py-0 items-center">
      <div class="flex  flex-shrink-0 text-black">
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
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block:lg lg:flex lg:items-center lg:w-auto hidden">
        <div class="text-sm lg:flex-grow">
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
          <Link className="btn m-0 px-10" to="/">
            <span>call Us</span>
            <FaPhone />
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
