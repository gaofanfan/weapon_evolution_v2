var Player = require('./player');

function Soldier(name, role, hp, attackPoint, armor, weapon) {
  Player.call(this, name, role, hp, attackPoint);
  this.armor = armor || null;
  this.weapon = weapon || null;
}

module.exports = Solider;
