// constructor
var Shop = function(id,name,X,Y) {
  this.shopID;
  this.shopName;
  this.latitube;
  this.longitude;
};

// プロトタイプ内でメソッドを定義
Shop.prototype.registerShop = function(id,name,x,y) {
    this.shopID = id;
    this.shopName = name;
    this.latitube = x;
    this.longitude = y;
    
    return(this.shopName);
};

Shop.prototype.editShop = function(name,x,y) {
    this.shopName = name;
    this.latitube = x;
    this.longitude = y;
};

Shop.prototype.deleteShop = function(id){
    this.shopID = id;
};

Shop.prototype.getName = function(){
        //  メンバ変数の値を返却
        return( this.shopName );
    };
    
var shopInstance = new Shop();

// プロトタイプ内のメソッド呼び出し
shop.registerShop(id, name, x, y);//ショップ情報登録
shop.editShop(name, x, y); // ショップ情報編集
shop.deleteShop(id)//ショップ情報削除


