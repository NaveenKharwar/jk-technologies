import React from "react"

const FeaturesCard = props => {
  return (
    <div className="w-1/3 featured-card" title={props.data.title}>
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
  )
}

export default FeaturesCard
