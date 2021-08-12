import React, { Component } from 'react';
import { Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

class Video extends Component {
  constructor() {
    super();

    this.state = {
      showVideo: false,
    };

    this.showVideo = this.showVideo.bind(this);
  }

  showVideo(event) {
    event.preventDefault();

    this.setState({ showVideo: true }, () => {

    });
  }


  render() {
    return (
      <div>
        {
          this.state.showVideo
          ? (
            <div className="embed-container">
              <iframe
                src={this.props.videoSrcURL}
                title={this.props.videoTitle}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />
            </div>
          )
          : (
            <div onClick={this.showVideo} >
              <Img fluid={this.props.videoThumbSrc} className="video-thumb" alt="" />
            </div>
          )
        }
      </div>
    );
  }
}

export default Video
