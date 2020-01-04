import React from "react"

const PriceCard = props => {
  return (
    <div className="price-card__container ">
      <div className="price-card cursor-pointer rounded  shadow-2xl hover:shadow border-8 hover:border-r hover:border-l hover:border-yellow-400 mx-5 mt-10 ">
        <div className="price-header">
          <div className="price-title uppercase text-white font-bold text-center py-5">
            <span className="text-lg">{props.data.title}</span>
          </div>
        </div>
        <div className="price-article">
          <div className="price-logo my-12 flex justify-center">
            <img
              style={{ width: `100px` }}
              src={props.data.imgUrl}
              alt={props.data.title}
              title={props.data.title}
            />
          </div>
          <ul className="text-center text-white">
            <li className="border-t py-4">{props.data.bandWidth}</li>
            <li className="border-t py-4">{props.data.usage}</li>
            <li className="border-t py-4">{props.data.validity}</li>
          </ul>
        </div>
        <div className="price-card__rate w-full bg-yellow-400 text-black py-5 text-center">
          <p className="m-0">Rs. {props.data.price} -/Month</p>
        </div>
      </div>
    </div>
  )
}

export default PriceCard
