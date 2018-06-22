export default class ViewPlayers {
  constructor(playerGateway) {
    this.playerGateway = playerGateway
  }

  execute(presenter) {
    const players = this.playerGateway.all()
    presenter.present(players)
  }
}
