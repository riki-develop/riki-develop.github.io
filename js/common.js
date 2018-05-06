$(function(){
//////////////////////////////////////////
//スティッキーヘッダー//
//////////////////////////////////////////
	var sticky = $("#header_ttl"),
		offset = sticky.offset();
		// sticky.html( "leftは" + offset.left + "px,　" + "topは" + offset.top + "pxです。" );

	$(window).scroll(function(){
		if($(this).scrollTop() > offset.top){
			sticky.addClass("fixed");
		}else{
			sticky.removeClass("fixed");
		};

		return false;
	});
//////////////////////////////////////////
//トップボタン//
//////////////////////////////////////////
	var top = $("#top_btn-wrap");

	$(window).scroll(function(){
		if($(this).scrollTop() > 300){
			top.fadeIn();
		}else{
			top.fadeOut();
		};
	});

	$(top).on("click", function(){
		$("body,html").animate({
			scrollTop: 0
		},400);

		return false;
	});
//////////////////////////////////////////
//カルーセル//
//////////////////////////////////////////
	$(".bxslider").bxSlider({
		slideWidth: 900,
		auto: true,
		mode: "horizontal",
		pause: 4000,
		speed: 2000,
		adaptiveHeight: true
	});
//////////////////////////////////////////
//ニュース アコーディオン//
//////////////////////////////////////////
	var news_slide_btn = $(".see_more_btn"),
		see_more_txt = "open";

	$(news_slide_btn).on("click", function(){
		var target = $(this).data("target");
		
		$("#" + target).slideToggle(300);

		if(see_more_txt == "open"){
			$(this).text("閉じる");
			see_more_txt = "close";
		}else{
			$(this).text("もっと見る");
			see_more_txt = "open";
		}

		return false;
	});
//////////////////////////////////////////
//モーダル//
//////////////////////////////////////////
	var open = $(".modal_btn_open"),
		close = $(".click_point"),
		overlay = $("#modal-overlay");

	$(open).on("click", function(){
		var target = $(this).data("target");

		$("#" + target).fadeIn("slow"),
		$(overlay).fadeIn("slow");
	});

	$(close).on("click", function(){
		var target = $(this).data("target");

		$("#" + target).toggle(),
		$(overlay).toggle();

		return false;
	});
//////////////////////////////////////////
//サイドバー アコーディオン//
//////////////////////////////////////////
	var slide_btn = $(".shop-list-ttl");

	$(slide_btn).on("click", function(){
		var target = $(this).data("target");

		$("#" + target).slideToggle(300);

		return false;
	});
});
//////////////////////////////////////////
//FizzBuzz//
//////////////////////////////////////////
// 有名関数
// function FizzBuzz(){
// 	for(i = 1; i <= 100; i++){
// 		if(i%3 === 0 && i%5 !== 0){
// 			console.log("Fizz");
// 
// 		}else if(i%3 !== 0 && i%5 === 0){
// 			console.log("Buzz");
// 
// 		}else if(i%3 === 0 && i%5 === 0){
// 			console.log("FizzBuzz");
// 
// 		}else{
// 			console.log(i);
// 
// 		}
// 	}
// };
// FizzBuzz();


// 即時関数
(function(){
	for(i = 1; i <= 100; i++){
		if(i%3 === 0 && i%5 !== 0){
			console.log("Fizz");

		}else if(i%3 !== 0 && i%5 === 0){
			console.log("Buzz");

		}else if(i%3 === 0 && i%5 === 0){
			console.log("FizzBuzz");

		}else{
			console.log(i);

		}
	}
}());
