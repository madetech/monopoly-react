import ViewPlayers from '.'

describe('view players', () => {
  describe('given Kyle is the only player', () =>{
    it('shows Kyle', () => {
      let spyPresenter = { present: jest.fn() }
      let gateway = { all: jest.fn(() => ['Kyle']) }
      let useCase = new ViewPlayers(gateway)
      useCase.execute(spyPresenter)

      expect(spyPresenter.present).toHaveBeenCalledWith(['Kyle'])
    })
  })

  describe('given Kyle and Steve are both players', () =>{
    it('shows Steve', () => {
      let spyPresenter = { present: jest.fn() }
      let gateway = { all: jest.fn(() => ['Steve', 'Kyle']) }
      let useCase = new ViewPlayers(gateway)
      useCase.execute(spyPresenter)

      expect(spyPresenter.present).toHaveBeenCalledWith(['Steve', 'Kyle'])
    })
  })
})
