function Player(name, role, hp, attackPoint) {
  this.name = name;
  this.role = role;
  this.hp = hp;
  this.attackPoint = attackPoint;
}

Player.prototype.attack = function (defender) {
  var result = '';
  defender.hp -= this.getAttackPoint(defender.getDefenderPoint());

  result += this.role + this.name + '攻击了' + defender.role + defender.name +
    ',' + defender.name + '受到了' + this.getAttackPoint(defender.getDefenderPoint()) +
    '点伤害，' + defender.name + '剩余生命值：' + defender.hp + '\n';

    if (defender.hp <= 0) {
      result += '\n' + defender.name + 'OUT!!';
    }
    return result;
};

Player.prototype.getAttackPoint = function (defenderPonit) {
  return this.attackPoint - defenderPonit;
};

Player.prototype.getDefenderPoint = function () {
  return 0;
};
module.exports = Player;
