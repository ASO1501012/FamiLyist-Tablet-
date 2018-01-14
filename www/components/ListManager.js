document.write('<script type="text/javascript" language="JavaScript" src="components/Connect.js"></script>');

var ListManager = function(){};

//listに登録されている商品を取得する
ListManager.prototype.getGoodsListToList = function(tabletID){
    var connectInstance = new Connect();
    var goodsList = connectInstance.getGoodsListToList('http://163.44.174.115:80/jsonGetGoodsListToList.php',tabletID);
    
    //ながいlistが帰ってくるから、それを整理する処理
    
    //整理した購入リストを返す
    return goodsList;
};

//listに商品を追加する
ListManager.prototype.addGoods = function(tabletID,goodsID){
    //alert(tabletID+":"+goodsID);
    var connectInstance = new Connect();
    connectInstance.addGoods('http://163.44.174.115:80/jsonAddGoodsList.php',tabletID,goodsID);
};

//listから商品を削除する
ListManager.prototype.deleteGoods = function(tabletID,goodsID){
    var connectInstance = new Connect();
    connectInstance.deleteGoods('http://163.44.174.115:80/jsonDeleteGoodsToList.php',tabletID,goodsID);
};

//listの商品数を増やす
ListManager.prototype.plusGoods = function(tabletID,goodsID){
    var connectInstance = new Connect();
    connectInstance.plusGoods('http://163.44.174.115:80/jsonPlusGoodsNum.php',tabletID,goodsID);
};

//listの商品数を減らす
ListManager.prototype.minusGoods = function(tabletID,goodsID){
    var connectInstance = new Connect();
    connectInstance.minusGoods('http://163.44.174.115:80/jsonMinusGoodsNum.php',tabletID,goodsID);
};
