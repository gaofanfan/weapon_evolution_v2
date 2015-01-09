function Player(name, role, hp, ap) {
  this.name = name;
  this.role = role;
  this.hp = hp;
  this.ap = ap;
}

Player.prototype.build_attack_with_string = function () {
  return '攻击了';
};
Player.prototype.attack = function (defender) {
  var result = '';
  defender.hp -= this.getAttackPoint(defender.getDefenderPoint());

  result += this.role + this.name + this.build_attack_with_string() + defender.role + defender.name +
    ',' + defender.name + '受到了' + this.getAttackPoint(defender.getDefenderPoint()) +
    '点伤害，' + defender.name + '剩余生命值：' + defender.hp + '\n';

    if (defender.hp <= 0) {
      result += '\n' + defender.name + 'OUT!!';
    }
    return result;
};

Player.prototype.getAttackPoint = function (defenderPonit) {
  return this.ap - defenderPonit;
};

Player.prototype.getDefenderPoint = function () {
  return 0;
};
module.exports = Player;
