import React from "react"

const FeaturesCard = props => {
  return (
    <div className="featured-card__container" title={props.data.title}>
      <div className="featured-card">
        <div style={{ width: `150px` }}>
          <img
            src={props.data.imgUrl}
            alt={props.data.title}
            title={props.data.title}
          />
        </div>
        <h3>{props.data.title}</h3>
        <p>{props.data.content}</p>
      </div>
    </div>
  )
}

export default FeaturesCard
