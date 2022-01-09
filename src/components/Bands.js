import React, { Component } from 'react'
import Band from './Band'

export default class Bands extends Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.bands.map(band => <Band key={band.id} id={band.id} name={band.name} deleteBand={this.props.deleteBand}/>)}
        </ol>
      </div>
    )
  }
}
