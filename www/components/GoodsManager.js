document.write('<script type="text/javascript" language="JavaScript" src="components/Connect.js"></script>');

GoodsManager = function(){};

//自分がよく買う商品情報を登録する
GoodsManager.prototype.registerGoods = function(tabletID,goodsName,categoryID){
    var connectInstance = new Connect();
    connectInstance.registerGoods('http://163.44.174.115:80/jsonAddGoods.php',tabletID,goodsName,categoryID);
};

//自分が登録している商品情報を取得する
GoodsManager.prototype.getGoods = function(tabletID,categoryID){
    var connectInstance = new Connect();
    //ユーザーが設定している商品情報のリストがobjectで帰ってくる
    var goodsList = connectInstance.getGoods('http://163.44.174.115:80/jsonGetGoodsList.php',tabletID,categoryID);
    //中身を綺麗にする処理
    //綺麗にしたobjectを返す
    return goodsList;
};

//登録している商品情報を編集する
GoodsManager.prototype.editGoods = function(tabletID,goodsID,goodsName,categoryID){
    var connectInstance = new Connect();
    connectInstance.editGoods('http://163.44.174.115:80/jsonEditGoods.php',tabletID,goodsID,goodsName,categoryID);
};

//登録している商品情報を削除する
GoodsManager.prototype.deleteGoods = function(tabletID,goodsID){
    //alert('tabletID'+tabletID);
    //alert(goodsID);
    var connectInstance = new Connect();
    connectInstance.deleteGoods2('http://163.44.174.115:80/jsonDeleteGoods.php',tabletID,goodsID);
};
//カテゴリー取得
GoodsManager.prototype.getCategoryList = function(tabletID){
    var connectInstance = new Connect();
    var categoryResult = connectInstance.getCategoryList('http://163.44.174.115:80/jsonGetCategoryList.php',tabletID);
    return categoryResult;
};
