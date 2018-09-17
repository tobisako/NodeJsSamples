const crypto = require('crypto');

// ランダム・クラス
class RandLib {
  // コンストラクタ
  constructor() {
    this.nBytes = 4;
    this.maxValue = new Buffer(Array(this.nBytes).fill(0xff)).readUIntBE(0, this.nBytes);
  }
  // 乱数の生成
  getSecureRandomBase() {
    const randomBytes = crypto.randomBytes(this.nBytes);
    const r = randomBytes.readUIntBE(0, this.nBytes);
    return r / this.maxValue;
  }
  // 整数乱数の生成
  getRnd(range) {
    var b = this.getSecureRandomBase();
    var res = parseInt(b * range);
    //console.log(`base=${b}, res=${res}`);
    return res;
  }
}

module.exports = RandLib;
