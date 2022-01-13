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
