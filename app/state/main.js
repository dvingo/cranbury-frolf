import reactor from './reactor'
var Nuclear = require('nuclear-js')
var holeData = require('../fixtures/holeData')
var Immutable = Nuclear.Immutable

var holesStore = new Nuclear.Store({
  getInitialState() {
    return Nuclear.toImmutable({})
  },
  initialize() {
    this.on('setHole', (state, holeData) => {
      return state.set(holeData.id, Immutable.fromJS(holeData))
    })
  }
})

var imageMapStore = new Nuclear.Store({
  getInitialState() {
    return Nuclear.toImmutable(holeData.imageMap)
  }
})

reactor.registerStores({
  holes: holesStore,
  imageMap: imageMapStore
})

Object.keys(holeData.holes).forEach(key => {
  var hole = holeData.holes[key]
  reactor.dispatch('setHole', hole)
})

module.exports = {
  getters: {
    holes: [['holes'], holes => holes.toList()],
    imageMap: ['imageMap']
  },
  //actions: actions
}
