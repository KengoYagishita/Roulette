// JavaScript Document
$(function(){
    $('.js-open').on('click',function(){
		// 選択した数を格納する配列の要素数が1以上かチェック
		if (sele.length < 1) {
			alert("1つ以上数字を選択してください")
			return;
		}
        $('.js-modal').fadeIn();
        //return false;
    });
    $('.js-close').on('click',function(){
        $('.js-modal').fadeOut();
        //return false;
    });
});