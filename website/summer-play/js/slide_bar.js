$(document).ready(function () {
    let item_single = $('.item').find('.item-single');
    let nav_height = $('.progress-bar').outerHeight();

    item_single.hover(
        function () { $(this).find('.item-single-img').addClass('touch'); },
        function () { $(this).find('.item-single-img').removeClass('touch'); }
    );
    let move_point = $('.progress-bar').find('li')
    move_point.click(function () {
        let click_point = $(this).parents('.progress-bar').find('li').index(this);
        $('html,body').animate({ scrollTop: $('html,body').find('h2').eq(click_point).offset().top - nav_height }, 800);

        $(this).parents('.progress-bar').find('li').removeClass('here');
        $(this).addClass('here');
    });

    let each_h2_height = {}; /*設定一個空集合*/
    $('h2').each(function () { /*會選取每一個h2做處理，會輸出同等數量的值*/
        let $this = $(this); /*存取當前this的值*/
        each_h2_height[$this.attr('id')] = $this.first().offset().top; /*陣列裡的屬性名稱不能是數字!!所以[]裡不能用$this.index()!!!*/
    });
    $(window).scroll(function () {
        let scrolled = $(this).scrollTop();

        for (x in each_h2_height) { /*x會等於each_h2_height裡的屬性名稱的"字串"，就是 $this.attr('id') */
            if (scrolled >= (each_h2_height[x] - 150)) { /*如果視窗滾動高度大於等於(各個h2到頁面頂的高度-100px)*/
                let y = $('.progress-bar').find("." + x); /*x的值等於各h2的id名稱,加上.就是class名稱*/
                $('.progress-bar').find('li').removeClass('here');
                y.addClass('here');
            }
        }/*for迴圈 搭配陣列 會照陣列數值做處理*/
        console.log("目前捲動高度" + scrolled);

    });


});