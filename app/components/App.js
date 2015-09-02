import React from 'react'
import s from '../styles/main.scss'
import Router from 'react-router'
import Map from './Map'
var _ = require('underscore')

export default React.createClass({
  getInitialState() {
    return {
      imgHeight: window.innerHeight,
      imgWidth: window.innerWidth,
      zoom: 1
    }
  },

  componentWillMount() {
    document.addEventListener('DOMContentLoaded', () => FastClick.attach(document.body))
  },

  componentDidMount() {
    console.log('did mount')
    var self = this
    var resizeHandler = _.throttle(function() {
      self.setState({imgHeight: window.innerHeight, imgWidth: window.innerWidth})
    }, 16)
    window.addEventListener('resize', resizeHandler)
  },

  handleInput(e) {
    this.setState({zoom: e.target.value})
  },

  render() {
    var height = 938//this.state.imgHeight
    var width = 1330//this.state.imgWidth
    console.log('rendering')
    var inputStyle = {
      position: 'absolute',
      top: 0,
      left: 0
    }
    return (
      <div>
       <input style={inputStyle} onChange={this.handleInput}/>
       <Map url={'./app/images/cranbury_park_trail_map-50pc.jpg'}
            portraitUrl={'./app/images/cranbury_park_trail_map-50pc-portrait.jpg'}
            maxHeight={938} maxWidth={1330} zoom={this.state.zoom}/>
      </div>
    )
  }
})

//Set a minimum image size and allow scaling, when scaled just multiply the area coords by the scale factor
//to get zoommable coords.
