import React, { Component } from "react"

export default class Hero extends Component {
  render() {
    return (
      <>
        <div className="flex mb-4">
          <div className="w-1/2 bg-gray-400 h-12"></div>
          <div className="w-1/2 bg-gray-500 h-12"></div>
        </div>
      </>
    )
  }
}
