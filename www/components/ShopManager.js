document.write('<script type="text/javascript" language="JavaScript" src="components/Connect.js"></script>');


ShopManager = function(){};

//店情報を登録する
ShopManager.prototype.registerShop = function(tabletID,shopName,latitude,longitude){
    var connectInstance = new Connect();
    connectInstance.registerShop('http://163.44.174.115:80/jsonAddShop.php',tabletID,shopName,latitude,longitude);
};

//登録されている店情報を編集する
ShopManager.prototype.editShop = function(tabletID,shopID,shopName,latitude,longitude){
    var connectInstance = new Connect();
    connectInstance.editShop('http://163.44.174.115:80/jsonEditShop.php',tabletID,shopID,shopName,latitude,longitude);
};

//登録されている店情報を削除する
ShopManager.prototype.deleteShop = function(tabletID,shopID){
    var connectInstance = new Connect();
    connectInstance.editShop('http://163.44.174.115:80/jsonDeleteShop.php',tabletID,shopID);
};

//登録されている店情報を取得する
ShopManager.prototype.getShopList = function(tabletID){
    var connectInstance = new Connect();
    var return_value = connectInstance.getShopList('http://163.44.174.115:80/jsonGetShopList.php',tabletID);
    return return_value;
};

