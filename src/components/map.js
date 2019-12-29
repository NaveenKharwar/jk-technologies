import React, { Component } from "react"
import { Map, GoogleApiWrapper } from "google-maps-react"

class GMap extends Component {
  render() {
    return (
      <>
        <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        />
      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDuuZjaV_c2MEZBe13vQD9HmC3_pOmohX8",
})(GMap)
