import ReduxPlayerPresenter from '.'

xdescribe('redux player presenter', () => {
  describe('dispatches an action' , () => {
    it('with the name "Kyle"', () => {
      const spyStore = { dispatch: jest.fn() }
      const presenter = new ReduxPlayerPresenter(spyStore)

      presenter.present('Kyle')

      expect(spyStore.dispatch).toHaveBeenCalledWith(
        {
          type: 'ADD_PLAYER',
          name: 'Kyle'
        }
      )
    })

    it('with the name "Steve"', () => {
      const spyStore = { dispatch: jest.fn() }
      const presenter = new ReduxPlayerPresenter(spyStore)

      presenter.present('Steve')

      expect(spyStore.dispatch).toHaveBeenCalledWith(
        {
          type: 'ADD_PLAYER',
          name: 'Steve'
        }
      )
    })
  })
})
