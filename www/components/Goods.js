// constructor
var Goods = function(id,name,categoryId) {
  this.goodsID;
  this.goodsName;
  this.categoryID;
};

// プロトタイプ内でメソッドを定義
Shop.prototype.registerGoods = function(id,name,categoryID) {
    this.goodsID = id;
    this.goodsName = name;
    this.categoryID = categoryID;
    //DBに商品情報を登録する
};

Shop.prototype.getGoods = function(categoryID) {
    this.categoryID = categoryID
    //DBからcategoryIDに登録されている商品情報をリストで返す
};

Shop.prototype.editGoods = function(id,name,categoryID){
    this.goodsID = id;
    this.goodsName = name;
    this.categoryID = categodyID;
    //DBに保存されている情報をUPDATE
};

var goodsInstance = new Shop();

// プロトタイプ内のメソッド呼び出し
shop.registerShop(id, name, x, y);//ショップ情報登録
shop.editShop(name, x, y); // ショップ情報編集
shop.deleteShop(id)//ショップ情報削除



