import React from 'react'
import s from '../styles/main.scss'
import Router from 'react-router'
import Map from './Map'
import reactor from '../state/reactor'
import Store from '../state/main'
var _ = require('underscore')

export default React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      holes: Store.getters.holes,
      imageMap: Store.getters.imageMap
    }
  },

  getInitialState() {
    return {
      zoom: 1,
      img: null,
      imageIndex: 0
    }
  },

  componentWillMount() {
    document.addEventListener('DOMContentLoaded', () => FastClick.attach(document.body))
  },

  handleInput(e) {
    this.setState({zoom: e.target.value})
  },

  handleClick(area, e) {
    var {imageIndex} = this.state
    var images = area.get('images')
    var imgIndex = (imageIndex + 1) % images.count()
    var img = images.get(imgIndex)
    this.setState({imageIndex:imgIndex, img:img})
  },

  render() {
    var imageMap = this.state.imageMap
    var imgStyle = {
      position: 'absolute',
      right: 0,
      top: 0
    }
    var img = this.state.img
    var height = 509
    var width = 336
    return (
      <div style={{position:'relative'}}>
        <img src={img} width={width} height={height} style={imgStyle}/>
        <Map url={imageMap.get('url')}
             onClick={this.handleClick}
             areas={this.state.holes}
             height={imageMap.get('height')} width={imageMap.get('width')}
             name={imageMap.get('name')}
             zoom={this.state.zoom}/>
      </div>
    )
  }
})
