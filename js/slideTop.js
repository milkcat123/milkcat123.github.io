//goTop按鈕
var goTopButton = $('#goTop');
goTopButton.click(function () { /*點擊.go-top-btn 滾動至body頂端*/
    $('html,body').animate({ scrollTop: 0 }, 800)
}
);
$(window).on('scroll resize reload', function () { /*當視窗滾動的時候*/
    if ($(window).scrollTop() > $(window).height()) /*如果視窗距離頂部的距離大於視窗的高度，則backButton淡入 否則 backButton淡出*/ 
    { goTopButton.show(); }
    else { goTopButton.fadeOut(); }
});

let scrollTarget = $('.scroll-target');
let scrollItem = $('.scroll-target').children('section');//改children
let menuHeight = $('.menu-height').outerHeight();
console.log(`nav高: ${menuHeight}px`);

scrollItem.each(function () {
    let _this = $(this);
    $(window).on('scroll resize reload', function () {
        let scrollItemT = _this.offset().top,
            scrollTargetT = scrollTarget.offset().top,
            scrollTargetH = scrollTarget.outerHeight(),
            windowH = $(window).scrollTop(),
            thisIndex = _this.index();
        // console.log(`main距頂: ${scrollTargetT} px`);
        // console.log(`windowH距頂${windowH}px`)
        // console.log(`第${thisIndex}個距頂${scrollItemT - windowH}px`);
        if ((scrollTargetT - menuHeight) > windowH) {
            $('.scroll-tag').find('li').removeClass('on');
        }
        if (scrollItemT - windowH - 5 <= menuHeight) {
            $('.scroll-tag').find('li').removeClass('on');
            $('.scroll-tag').find('li').eq(thisIndex).addClass('on');
        }
    });

});

$('.scroll-tag').find('li').click(function () {
    let clickNum = $(this).index();
    // console.log(`點擊的li序號${clickNum}`);
    let menuHeight = $('.menu-height').outerHeight(),
        targets = $('.scroll-target').children('section');//改children

    //切換點擊或滑動的li
    $('.scroll-tag').find('li').removeClass('on');
    $(this).addClass('on');

    //找相對應的區塊
    console.log(`nav高度${menuHeight}`);
    $('html,body').stop().animate({ scrollTop: targets.eq(clickNum).offset().top - menuHeight }, 800);

})

//說明: 點擊的ul加上 .scroll-tag 要跳動的區塊的 父元素 加入 .scroll-target 更改跳動區塊的標籤(父元素底下的children)
