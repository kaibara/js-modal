$(function(){

    // どのようにページが読み込まれたかのフラグ
    var backFlg = window.performance.navigation.type;

    // ブラウザバック以外で読み込まれたらのif
    if(backFlg < 2){
        // 履歴に現在のURLを追加保存する
        history.pushState(null,null,location.href);
    }

    //モーダルウィンドウの表示
    $(window).on('popstate', function(event) {
        $(".js-modal").fadeIn();

        // モーダルウィンドウ内閉じるリンクのリンク先変更
        var mLink = document.getElementsByClassName("js-modal-close")
        mLink[1].setAttribute("onClick", "history.back();return false;");

    });

    // モーダルウィンドウの解除
　　$('.js-modal-close').on('click',function(){
        $(".js-modal").fadeOut();
        return false;
　　});

});
