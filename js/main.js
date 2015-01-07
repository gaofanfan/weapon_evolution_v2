var Player = require('./model/player');
var Soldier = require('./model/soldier');
var PlayerPK = require('./model/player-pk');
var Weapon = require('./model/weapon');
var Armor = require('./model/armor');

function weaponEvolution() {

  var armor = new Armor('护盾', 2);
  var weapon = new Weapon('尚方宝剑', 4);
  var playerOne = new Soldier('张三', '战士', 50, 10, armor, weapon);
  var playerTwo = new Player('李四', '普通人',40, 10);
  var playerPK = new PlayerPK(playerOne, playerTwo);

  console.log(playerPK.pk());
}

weaponEvolution();
