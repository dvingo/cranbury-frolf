import reactor from './reactor'
// import stores
reactor.registerStores({
})

firebaseRef.onAuth(authData => {
  if (authData) {
    console.log("User is logged in")
  } else {
    console.log("User is logged out")
  }
})

module.exports = {
  getters: getters,
  actions: actions
}
