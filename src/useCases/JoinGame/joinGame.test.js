import JoinGame from '.'

xdescribe('join game', () => {
  describe('passes the name to the presenter', () => {
    it('Example one', () => {
      let spyPresenter = { present: jest.fn() }
      let use_case = new JoinGame()
      use_case.execute(spyPresenter, 'Kyle')

      expect(spyPresenter.present).toHaveBeenCalledWith('Kyle')
    })

    it('Example one', () => {
      let spyPresenter = { present: jest.fn() }
      let use_case = new JoinGame()
      use_case.execute(spyPresenter, 'Steve')

      expect(spyPresenter.present).toHaveBeenCalledWith('Steve')
    })
  })
})
