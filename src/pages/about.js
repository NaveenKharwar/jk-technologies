import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Jk Technologies" />
    <div className="about_cta text-center">
      <div className="container">
        <div className="py-20 px-10">
          <h2>
            We JK Technologies, believe that affordable access to internet
            should be as readily available as are public facilities such as
            roads, electricity, and water.
          </h2>
        </div>
      </div>
    </div>
    <div>
      <div class="about-grid">
        <div className="about-image">
          <div className="flex-1 items-center">
            <Banner />
          </div>
        </div>
        <div className="about-content">
          <div className="flex-1 items-center">
            <p>
              <span>Hey There,</span>
              We are JK Technologies
            </p>
            <p>
              An Indian Company founded in 2019 as a sales, service and solution
              provider in Information & Technologies. J K Technologies has a
              strong distribution network covering all over Sikkim. Company's
              head office is in Tikzuk, West Sikkim.     J K Technologiesis
              deals in CCtv, Optical fiber Networks, Wireless products and
              solutions, video conferencing, tower maintenance, intercom,
              biometrix, hotspot, computer and accessories, AMC, routers. J K
              Technologies is founded by Mr. Jigmee Bhutia who has a rich
              experience of 5+ years in Networking products. The company has the
              team of 10+ employees on Pan India Basis.     The Company believes
              in policy to deliver optimum cost - high B/W solutions to our
              clients. J K Technologies with the team of in-house technical
              experts delivers real time data through RF output for all the wire
              & wireless security surveillance providers in Point to Point &
              Point to Multi Point application. These technical experts also
              provides help to remote client site and onsite support as well.  
                The company believes to help the clients to choose the right
              product as per their requirements.     J K Technologieshas been
              associated with Government projects in West Sikkim.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
