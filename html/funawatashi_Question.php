<?php
    $nanido = "";
    $onload;
    $nanido = $_POST["nanido"];
    if($nanido=='1'){
        $onload="'shoki(0);viewhantei();viewchange();modal(0);'";
    }else if($nanido=='2'){
        $onload="'shoki(1);viewhantei();viewchange();modal(0);'";
    }else if($nanido=='3'){
        $onload="'shoki(2);viewhantei();viewchange();modal(0);'";
    }
    //MySQLに接続
    $con = mysqli_connect("localhost","root","","db_question");
    //tbl_kaiinからすべてのレコード取得
    $sql = "select * from tbl_funawatashi where number_funawatashi = '$nanido'" ;
    $rst = mysqli_query($con,$sql) or die("失敗");
    $data = mysqli_fetch_array($rst);
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>問題ページ 船渡し</title>
    <script type="text/javascript" src="../javascript/Question.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script type="text/javascript" src="../javascript/jQueryRotate.js"></script>
    <script type="text/javascript" src="../javascript/funawatashi_Question.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/Question.css">
    <link rel="stylesheet" type="text/css" href="../css/funawatashi_Question.css">
</head>
<body onload=<?php $onload ?>>
    <!-- ここからモーダルウィンドウ -->
    <div id="modal-content0">
	    <p style='margin-top:25vh;'><img src='../image/B_F2.png' style='width:40vw; height:30vh;'></p>
        <div class='center'><input type='button' id='modal-close0' class='tojiru'></div>
    </div>
    <div id="modal-content1">
        <?= $data['hint_funawatashi'] ?>
    </div>
    <div id="modal-content2">
        <p style='margin-top:25vh;'><img src='../image/funawatashi_clear.png' style='width:40vw; height:8vh;'></p>
        <div class='center'><input type='button' class='mapback' onclick='mapjump()'></div>
    </div>
    <div id="modal-content3">
        <?= $data['gameover_funawatashi'] ?>
    </div>

    <div id="viewchange">
        <!-- モーダルウィンドウのコンテンツ開始 -->
        <img src="../image/view_text.png" id="deltext" alt="">
        <!-- モーダルウィンドウのコンテンツ終了 -->
    </div>

    <header>
        <!--前の画面へ戻るボタン-->
        <input type="button" class="hidari modoru" onclick="location.href='Difficulty_funawatashi.html'">
        <img id="title" src="../image/funawatashi_title.png" alt="">
        <input type="button" class="migi hint" onclick="modal(1)">
    </header>
    <div class="clam_left">
    <!--問題文章div-->
    <div id="bunsho" class="b">
    <img id="M_T" src="../image/M_T.png">
    <?= $data['bunsho_funawatashi'] ?>
    </div>
    
    <!--リセットボタン配置-->
    
    <div id="reset">
        <input type="button" class="migi" value="リセット" onclick="shoki(2)">
    </div>
    
    </div>
    <div class="clam_right">
       <?= $data['contents_funawatashi'] ?>
    </div>
</body>
</html>