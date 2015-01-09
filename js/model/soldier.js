var Player = require('./player');

function Soldier(name, role, hp, ap, armor, weapon) {
  Player.call(this, name, role, hp, ap);
  this.armor = armor || null;
  this.weapon = weapon || null;
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.attack = function (defender) {
  var result = '';
  defender.hp -= this.getAttackPoint(defender.getDefenderPoint());

  result += this.role + this.name + '用' + this.weapon.name + '攻击了' +
    defender.role + defender.name + ',' + defender.name + '受到了' +
    this.getAttackPoint(defender.getDefenderPoint()) + '点伤害，' +
    defender.name + '剩余生命值：' + defender.hp + '\n';

  if (defender.hp <= 0) {
    result += '\n' + defender.name + 'OUT!!';
  }

  return result;
};

Soldier.prototype.getAttackPoint = function(defenderPoint) {
  return this.ap + this.weapon.ap - defenderPoint;
};

Soldier.prototype.getDefenderPoint = function() {
  return this.armor.dp;
};


module.exports = Soldier;
