// constructor
var Phone = function(id,name) {
  this.phoneID = id;
  this.nicName = name;
};

// プロトタイプ内でメソッドを定義
Phone.prototype.getPhones = function() {
    return this.phoneName;
};

var phoneInstance = new Phone();

// プロトタイプ内のメソッド呼び出し
phone.getPhones(); // 登録されている携帯をリストで返す

