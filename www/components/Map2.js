Map2 = function(){};

mapInstance2 = new Map2();

//mapの表示関連
Map2.prototype.printMap2 = function(latitude,longitude,mapID){
    // キャンパスの要素を取得する
    var canvas = document.getElementById( mapID );
    // 中心の位置座標を指定する
    var latlng = new google.maps.LatLng( latitude, longitude );
    // 地図のオプションを設定する
    var mapOptions = {
        zoom: 15 ,	// ズーム値
    	center: latlng ,	// 中心座標 [latlng]
        draggable: false,
        scrollwheel: false
    };
    // [canvas]に、[mapOptions]の内容の、地図のインスタンス([map])を作成する
    var map = new google.maps.Map( canvas, mapOptions ) ;
    
    // // 地図のインスタンスを作成する
    // var map = new google.maps.Map( document.getElementById( 'map-canvas' ), {
    //     zoom: 15 ,    // ズーム値
    // 	center: new google.maps.LatLng(latitude,longitude) ,	// 中心の位置座標
    // } ) ;
    // マーカーのインスタンスを作成する
    var marker = new google.maps.Marker( {
        map: map ,	// 地図
    	position: new google.maps.LatLng( latitude, longitude ) ,	// 位置座標
    } ) ;
};

