import React, { Component } from "react"

export default class ContactForm extends Component {
  render() {
    return (
      <>
        <form>
          <div className="gatsby__form">
            <div>
              <label> Your Full Name</label>
              <input
                className="bg-white focus:outline-none border border-gray-300 rounded-none py-2 px-4 w-full appearance-none leading-normal"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <label> Your E-Mail Address</label>
              <input
                className="bg-white focus:outline-none border border-gray-300 rounded-none py-2 px-4 w-full appearance-none leading-normal"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>
            <div>
              <label> Subject</label>
              <input
                className="bg-white focus:outline-none border border-gray-300 rounded-none py-2 px-4 w-full appearance-none leading-normal"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label> Your Phone Number</label>
              <input
                className="bg-white focus:outline-none border border-gray-300 rounded-none py-2 px-4 w-full appearance-none leading-normal"
                type="number"
                name="number"
                placeholder="number"
                id="number"
                required
              />
            </div>
            <div>
              <label> Mesaage</label>
              <textarea
                className="bg-white focus:outline-none border border-gray-300 rounded-none py-2 px-4 w-full appearance-none leading-normal h-64"
                type="text"
                name="message"
                placeholder="Message"
                required
              />
            </div>
          </div>
          <div className="text-center">
            <button className="btn">Submit</button>
          </div>
        </form>
      </>
    )
  }
}
