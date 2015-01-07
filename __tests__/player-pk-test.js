jest.autoMockOff();

var PlayerPK = require('../js/model/player-pk');
var Player = require('../js/model/player');
var Soldier = require('../js/model/soldier');
var Armor = require('../js/model/armor');
var Weapon = require('../js/model/weapon');

describe('PlayerPK', function() {
  describe('#pk()', function () {
    it('should return text', function () {
      var armor = new Armor('护盾', 2);
      var weapon = new Weapon('尚方宝剑', 4);
      var playerOne = new Soldier('张三', '战士', 50, 10, armor, weapon);
      var playerTwo = new Player('李四', '普通人',40, 10);
      var playerPK = new PlayerPK(playerOne, playerTwo);

      var result = playerPK.pk();

      expect(result).toBe(
        '战士张三用尚方宝剑攻击了普通人李四,李四受到了14点伤害，李四剩余生命值：26\n\n' +
        '普通人李四攻击了战士张三,张三受到了8点伤害，张三剩余生命值：42\n\n' +
        '战士张三用尚方宝剑攻击了普通人李四,李四受到了14点伤害，李四剩余生命值：12\n\n' +
        '普通人李四攻击了战士张三,张三受到了8点伤害，张三剩余生命值：34\n\n' +
        '战士张三用尚方宝剑攻击了普通人李四,李四受到了14点伤害，李四剩余生命值：-2\n\n' +
        '李四OUT!!\n');
    });
  });

});
