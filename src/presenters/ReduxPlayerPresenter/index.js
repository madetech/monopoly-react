export default class ReduxPlayerPresenter {
  constructor(store){
    this.store = store
  }

  present(name){
    this.store.dispatch({
      type: 'ADD_PLAYER',
      name: name
    })
  }
}
