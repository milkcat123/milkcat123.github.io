//goTop按鈕
var goTopButton = $('#goTop');
goTopButton.click(function(){ /*點擊.go-top-btn 滾動至body頂端*/
	$('html,body').animate({scrollTop: 0},800)
}
);
$(window).on('scroll resize reload',function(){ /*當視窗滾動的時候*/
	if($(window).scrollTop() > $(window).height()) /*如果視窗距離頂部的距離大於視窗的高度，則backButton淡入 否則 backButton淡出*/
	{goTopButton.show();}
	else
	{goTopButton.fadeOut();}
});

//副排menuBar
$(window).on('scroll resize reload',function(){ /*當視窗滾動的時候*/
	if($(window).scrollTop() > $('.teaMenu .content').offset().top){
		$('.drinkList.aaa').css('display','block');
	}else{
		$('.drinkList.aaa').css('display','none');
	}
});

//點擊menuLi跳至該區塊
$(document).ready(function(){
	$('.drinkList ul').find('li').click(function(){
	  var clickNum = $(this).index();
	  console.log(`點擊的li序號${clickNum}`);
	  //找相對應的區塊
	  var menuHeight = $('nav.menuBar').height();
	  var divNum = $(this).parents('#mktContent').children('.wrapAllDrinks').children('.wrap');
	  $('html,body').animate({scrollTop: divNum.eq(clickNum).offset().top - menuHeight - 100} , 800);
  
	})}
  );