function PlayerPK(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
}

PlayerPK.prototype.pk = function (playerOne, playerTwo) {
  var result = '';

  while (true) {
    result += this.roundText(this.playerOne, this.playerTwo);

    if (this.playerOne.hp <= 0 || this.playerTwo.hp <= 0) {
      break;
    }

  }
  return result;
};

PlayerPK.prototype.roundText = function(playerOne, playerTwo) {
  var result = '';
  result += playerOne.attack(playerTwo) + '\n';

  if (playerTwo.hp <= 0) {
    result += '';
    return result;
  }

  result += playerTwo.attack(playerOne) + '\n';

  if (playerOne.hp <= 0) {
    result += '';
    return result;
  }

  return result;

};

module.exports = PlayerPK;
