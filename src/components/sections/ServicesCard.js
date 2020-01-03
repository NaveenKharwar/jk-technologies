import React from "react"
import { Link } from "gatsby"

const ServicesCard = props => {
  return (
    <div className="services-card__container flex mb-5 ">
      <div className="services-card flex-1  shadow hover:shadow-2xl">
        <div style={{ width: `100px` }}>
          <img
            className="mb-5"
            src={props.data.imgUrl}
            alt={props.data.title}
            title={props.data.title}
          />
        </div>
        <h3 className="text-primaryColor">{props.data.title}</h3>
        <p>{props.data.content}</p>
        <Link
          className="font-bold hover:text-primaryColor"
          to={props.data.linkUrl}
        >
          read more
        </Link>
      </div>
    </div>
  )
}

export default ServicesCard
