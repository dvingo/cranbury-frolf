import React from 'react'
import Router from 'react-router'

export default React.createClass({

  render() {
    var {url, height, width, portraitUrl, zoom, areas, onClick, name} = this.props
    var areaList = areas.map(a => {
      return (
        <area shape="poly" coords={a.get('polyCoords')} alt={a.get('name')}
              onClick={onClick.bind(null, a)}
              style={{background: 'red'}}/>
      )
    })
    return (
      <div>
        <img src={url} height={height} width={width} useMap={'#'+name}/>
        <map name={name}>
          {areaList}
        </map>
      </div>
    )
  }
})
