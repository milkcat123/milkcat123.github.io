
function aa($data1) { /*定義aa的函數值 $data1為onclick="aa(0)"的數字*/
    $('.hot-area-right-pic-single').click(function () { /*點擊右邊小圖*/
        $('.hot-area-left-pic-cover').stop(true, false).animate({ top: 0 }, 1200).delay(1500);
        /*stop(停止後續動畫,不跑完目前動畫)所以在動畫跑完前如果又點擊了同個動畫，視覺上看起來是繼續執行但又不會再重複執行，cover會以1200ms向下 並延遲1500ms */

        setTimeout(function () {
            var img, title;
            img = $('.hot-area-right-pic-single').eq($data1).find('img').attr('src'); /*宣告img 等於.hot-area-right-pic-single的第 $data1 個(點擊) 找到img 提取src*/
            title = $('.hot-area-right-pic-single').eq($data1).find('img').attr('title'); /*宣告title 等於.hot-area-right-pic-single的第 $data1 個(點擊) 找到img 提取title*/

            $('.hot-area-right-pic-single').parents('.hot-area-right').siblings('.hot-area-left').find('.hot-area-left-pic').find('img').attr('src', img);
            /*.hot-area-right-pic-single 的父層.hot-area-right 同胞的.hot-area-left 找到.hot-area-left-pic的img 提取src更改成img*/

            $('.hot-area-right-pic-single').removeClass("bright");
            $('.hot-area-right-pic-single').eq($data1).addClass("bright");
            $('.hot-area-left-word').text(title);/*.hot-area-left-word的文字替換成title*/

            $('.hot-area-address-content').hide();/*隱藏目前的.hot-area-address-content*/
            $('.hot-area-address-content').eq($data1).css("display", "inline-block");/*將點擊的.hot-area-address-content 顯現出來*/
            $('.hot-area-right').find('p').hide();
            $('.hot-area-right').find('p').eq($data1).show();
            $('.hot-area-right').find('h3').hide();
            $('.hot-area-right').find('h3').eq($data1).show();

        }, 1400);/*整體暫停1400ms後執行*/

        $('.hot-area-left-pic-cover').animate({ top: '-100%' }, 1200);
    })
}

$(document).ready(function () {
    $('.all-pic').find('.cv').hover(
        function () { $(this).children('.info-cover').css('bottom', '0'); },
        function () { $(this).children('.info-cover').css('bottom', '-100%'); }
    );
    /*選單*/
    $('.menubar-content').find('.menubar-content-ch').click(function () {
        var menunumber = $(this).parent('.menubar-content').find('.menubar-content-ch').index(this);
        if (menunumber === 0) /*等於要三個等於!!!!XD*/ { $('html,body').animate({ scrollTop: $('#hot-area').offset().top }, 800); }
        else if (menunumber === 1) { $('html,body').animate({ scrollTop: $('#osaka').offset().top }, 800); }
        else if (menunumber === 2) { $('html,body').animate({ scrollTop: $('#JRbn').offset().top }, 800); }
        else { $('html,body').animate({ scrollTop: $('#JRbn-mobile').offset().top }, 800); }
    });
    /*返回頂部*/
    var backButton = $('.go-top-btn')
    $('.go-top-btn').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 800)
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();
    });
});
