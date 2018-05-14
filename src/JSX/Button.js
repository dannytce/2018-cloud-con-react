export default `import React, { Component } from 'react'

class Button extends Component {
  handleClick = event => {
    event.preventDefult()
    console.log('Clicked')
  }

  render() { 
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    )
  }
}






class Button extends Component {
  handleClick = event => {
    event.preventDefult()
    console.log('Clicked')
  }

  render() { 
    return React.createElement(
      "button",
      { onClick: this.handleClick },
      "Click me"
    )
  }
}







<form onSubmit={this.handleSubmit}>
  <h3>What's your name?</h3>
  
  <label htmlFor="name">Name<label>
  <input
    value={this.state.value}
    onChange={this.handleChange}
    id="name"
  />
  <button type="submit">
    Submit
  </button>
<form>






React.createElement(
  "form",
  { onSubmit: this.handleSubmit },
  React.createElement(
    "h3", null, "What's your name"
  ),
  React.createElement(
    "label", { htmlFor: "name" },
    "Name"
  ),
  React.createElement("input", {
    id: "name",
    onChange: this.handleChange,
    value: this.state.text
  }),
  React.createElement(
    "button", { type: "submit" },
    "Submit"
  )
)




`
