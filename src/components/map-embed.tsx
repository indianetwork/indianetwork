import React, { Component } from 'react';
import { Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

class Map extends Component {
  constructor() {
    super();

    this.state = {
      showMap: false,
    };

    this.showMap = this.showMap.bind(this);
  }

  showMap(event) {
    event.preventDefault();

    this.setState({ showMap: true }, () => {

    });
  }

  render() {
    setTimeout(() => {
      this.setState({ showMap: true });
    }, 2000);

    return (
      <div>
        {
          this.state.showMap
          ? (
            <div className="map-frame">
              <iframe src={this.props.mapSrcURL} width="100%" height="300px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
          )
          : (
            <div onClick={this.showMap} >
              <Img fluid={this.props.mapThumbSrcURL} className="map-thumb" alt={this.props.alt} />
            </div>
          )
        }
      </div>
    );
  }
}

export default Map
