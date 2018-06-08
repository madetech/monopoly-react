import JoinGame from '.'

describe('join game', () => {
  it('passes the name to the presenter', () => {
    let spyPresenter = { present: jest.fn() }
    let use_case = new JoinGame()
    use_case.execute('Kyle', spyPresenter)

    // TODO: find the right function to check the jest spy
    expect(spyPresenter.present).wasCalled()
  })
})
