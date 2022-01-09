import React, { Component } from 'react'

export default class Band extends Component {
  handleClick = event => {
    this.props.deleteBand(this.props.id)
  }
     
  render() {
    return (
      <li>
        {this.props.name}
        <button onClick={this.handleClick}> Delete</button>
      </li>
    )
  }
}
