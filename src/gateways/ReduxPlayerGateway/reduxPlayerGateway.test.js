import ReduxPlayerGateway from '.'

describe('Redux player gateway', () => {
  describe('all', () => {
    it ('returns no players', () => {
      let gateway = new ReduxPlayerGateway()
      expect(gateway.all()).toEqual([])
    })

    xdescribe('given Kyle is the only player', () =>{
      it('returns a list of players containing Kyle', () => {
        let gateway = new ReduxPlayerGateway()

      })
    })
  })

  describe('save', () => {
    it('saves a player', () => {
      let gateway = new ReduxPlayerGateway()
      gateway.save('Kyle')

      // Do we test through the gateway's method?
      expect(gateway.all()).toEqual(['Kyle'])

      // Or do we get into redux internals?
      expect(redux.state).toInclude({
        players: ['Kyle']
      })
    })
  })
})
