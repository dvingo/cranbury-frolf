import React from 'react'
import Router from 'react-router'

export default React.createClass({

  render() {
    var {url, maxHeight, maxWidth, portraitUrl, zoom} = this.props
    var width = Math.round(maxWidth * zoom)
    var height = Math.round(maxHeight * zoom)
    var urlToUse = url
    if (window.innerHeight > window.innerWidth) {
      urlToUse = portraitUrl
      var temp = height
      height = document.body.clientHeight//width
      width = document.body.clientWidth//temp
    }
    return (
      <img src={urlToUse} height={height} width={width}/>
    )
  }
})

//Set a minimum image size and allow scaling, when scaled just multiply the area coords by the scale factor
//to get zoommable coords.
