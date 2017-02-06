/*変数の初期宣言+初回かどうかのフラグ*/ 
    var ringo_tutorial;
    /*画像常時のための変数*/
    var clear_1;
    var clear_2;
    var clear_3; 
    
//ローカルデータの取得よう
function localget(){
        //チュートリアル閲覧フラグ取得
        ringo_tutorial=window.localStorage.getItem("ringo_tutorial");
        //船渡し各問題クリアフラグ取得
        clear_1=window.localStorage.getItem("ringo_1");
        clear_2=window.localStorage.getItem("ringo_2");
        clear_3=window.localStorage.getItem("ringo_3");
}   

//localstorageにデータを挿入
function  localput(){
        //チュートリアル閲覧フラグput
        window.localStorage.ringo_tutorial=("ringo_tutorial",ringo_tutorial);
}

//モーダルダイアログの表示
function modal(){
        $(function(){

    //モーダルウィンドウを出現させるクリックイベント
    $(function(){

        //キーボード操作などにより、オーバーレイが多重起動するのを防止する
        $( this ).blur() ;	//ボタンからフォーカスを外す
        if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
        //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)

        //オーバーレイを出現させる
        $( "body" ).append( '<div id="modal-overlay"></div>' ) ;
        $( "#modal-overlay" ).fadeIn( "slow" ) ;

        //コンテンツをセンタリングする
        centeringModalSyncer() ;

        //コンテンツをフェードインする
        $( "#modal-content" ).fadeIn( "slow" ) ;

        //[#modal-overlay]、または[#modal-close]をクリックしたら…
        $( "#modal-overlay,#modal-close" ).unbind().click( function(){
            //動画停止
            stop();
            //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
            $( "#modal-content,#modal-overlay" ).fadeOut( "slow" , function(){

                //[#modal-overlay]を削除する
                $('#modal-overlay').remove() ;
            } ) ;

        } ) ;

    } ) ;

    //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
    $( window ).resize( centeringModalSyncer ) ;

        //センタリングを実行する関数
        function centeringModalSyncer() {

            //画面(ウィンドウ)の幅、高さを取得
            var w = $( window ).width() ;
            var h = $( window ).height() ;

            // コンテンツ(#modal-content)の幅、高さを取得
            // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
    //		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
    //		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
            var cw = $( "#modal-content" ).outerWidth();
            var ch = $( "#modal-content" ).outerHeight();

            //センタリングを実行する
            $( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

        }

    } ) ;
}

//難易度にセッションのデータを送るオンクリックイベント

//リンクを移動するよう
function mapjump(){
    window.location.href = 'map.html';
}

//遊び方動画の初回用判定
function tutorialhantei(){
    if(ringo_tutorial != "true"){
    document.getElementById('autovideo').innerHTML="<video style='width:40vw;height:60vh;' src='../movie/ringo_movie.mp4'  id='vid' controls autoplay>";
    modal();
    ringo_tutorial = "true";
    }else{
        document.getElementById('autovideo').innerHTML="<video style='width:40vw;height:60vh;' src='../movie/ringo_movie.mp4'  id='vid' controls>";
    }
}
/*画像表示部分*/ 
function clearhantei(clear,id){
    //クリア済みかの判定
    if(clear=="true"){
         //指定位置に画像の表示
        document.getElementById(id).innerHTML="<img style='position:relative;z-index: 2;' src='../image/star.png' class='clearimage'>";
    }else{
        document.getElementById(id).innerHTML="";
    } 
}

//全問題クリア済み画像表示
function cleardisp(){
    //クリア画像表示１
    clearhantei(clear_1,"clear1");
    //クリア画像表示2
    clearhantei(clear_2,"clear2");
    //クリア画像表示3
    clearhantei(clear_3,"clear3");
}

/*test*/
function localdelete(){
    window.localStorage.removeItem("ringo_tutorial");
} 
/*画面の縦横判定共通部分前頁共通*/
function viewhantei(){

    $(function(){
		if($(window).height()<$(window).width()){
			
		}else{
			 $(function(){

    //モーダルウィンドウを出現させるクリックイベント
    $(function(){

        //キーボード操作などにより、オーバーレイが多重起動するのを防止する
        $( this ).blur() ;	//ボタンからフォーカスを外す
        if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
        //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)

        //オーバーレイを出現させる
        $( "body" ).append( '<div id="modal-overlay"></div>' ) ;
        $( "#modal-overlay" ).fadeIn( "slow" ) ;

        //コンテンツをセンタリングする
        centeringModalSyncer() ;

        //コンテンツをフェードインする
        $( "#viewchange" ).fadeIn( "slow" ) ;

    } ) ;

    //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
    $( window ).resize( centeringModalSyncer ) ;

        //センタリングを実行する関数
        function centeringModalSyncer() {

            //画面(ウィンドウ)の幅、高さを取得
            var w = $( window ).width() ;
            var h = $( window ).height() ;

            // コンテンツ(#modal-content)の幅、高さを取得
            // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
    //		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
    //		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
            var cw = $( "#viewchange" ).outerWidth();
            var ch = $( "#viewchange" ).outerHeight();

            //センタリングを実行する
            $( "#viewchange" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

        }

    } ) ;
		}
	})

}

function viewchange(){
    $(window).bind("resize load",function(){
        if($(window).height()<$(window).width()){
            $( "#viewchange,#modal-overlay" ).fadeOut( "slow" , function(){

                        //[#modal-overlay]を削除する
                        $('#modal-overlay').remove() ;
                    } ) ;
        }else{
        viewhantei();
        }
    } ) ;
}
function stop(){
var v = document.getElementById("vid");
v.pause();
}
//メイン動作部分に変更
function main(){
    localget();
    cleardisp();
    tutorialhantei();
    localput();
    viewhantei();
    viewchange();
}

/*更新日：10/26
　function meinを追加
　ページを起動した際に動く関数をまとめたもの以後別ページにも共通
　動画表示判定をfunction tutorialhanteiに変更
　モーダルウィンドウのボタン配置変更
　画像表示function追加clearhantei cleardisp
  */ 