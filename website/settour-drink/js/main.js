function changeDisplay(){
  //頁籤預設on
  $('ul.slidecontain li:nth-child(1)').addClass('on');
  $('article.ph').each(function(){
      $(this).find('section.ph-group').eq(0).addClass('on');

  });
  //轉換橫式與圖文式商品樣式
  var drink1 = $('.drink1'), drink2 = $('.drink2'), drink3 = $('.drink3'), drink4 = $('.drink4'), drink5 = $('.drink5'), drink6 = $('.drink6'), drink7 = $('.drink7');
  function noPicMode(drink,tagNum){
      $(drink).find('.prodContent').find('section.ph-group').eq(tagNum).addClass('ticket');
  }
  noPicMode(drink1,1);
  noPicMode(drink2,1);
  noPicMode(drink3,0);
  noPicMode(drink6,0);
  noPicMode(drink6,1);
  noPicMode(drink7,0);
  noPicMode(drink7,1);
  
  //增加機票按鈕
  var href_1 = 'https://flight.settour.com.tw/domesticSearch?adtCount=1&chdCount=0&depDate=20210701,20210704&depAirportCode=TSA,MZG&arrAirportCode=MZG,TSA&tripType=RT&cms=IDX-E05A-D-02&cmsPrice=4049',
      href_2 = 'https://flight.settour.com.tw/domesticSearch?adtCount=1&chdCount=0&depDate=20210701,20210704&depAirportCode=TSA,KNH&arrAirportCode=KNH,TSA&tripType=RT&cms=IDX-E05A-D-02&cmsPrice=4269',
      href_3 = 'https://flight.settour.com.tw/domesticSearch?adtCount=1&chdCount=0&depDate=20210812,20210813&depAirportCode=TSA,LZN&arrAirportCode=LZN,TSA&tripType=RT&cms=IDX-E05A-D-02&cmsPrice=3898';
  var phMenu = $('.prodContent nav.ph-menu');
  function addPlaneBtn(need,href){
      need.find(phMenu).append("<a class='planeBtn' target='_blank'>機票</a>");
      need.find('a.planeBtn').attr('href',href);
  }
  addPlaneBtn(drink1,href_1);
  addPlaneBtn(drink2,href_2);
  addPlaneBtn(drink3,href_3);
  }
  changeDisplay();

  $('ul.slidecontain li').click(function(){
  var clickNum = $(this).index();
  $(this).parents('article.ph').find('section.ph-group').removeClass('on');
  $(this).parents('article.ph').find('section.ph-group').eq(clickNum).addClass('on');
  $(this).addClass('on').siblings().removeClass('on');
  console.log(clickNum);
  });


//ig高度變化
var i=0;
$(window).on('resize reload ready scroll',function(){ 
    var slide_ig = $('.igSlide'),
        height_ = $('.igPostPic').find('.igPostPicSingle').eq(0).find('img').height();
    slide_ig.height(height_);
});

$(window).on('resize reload ready',function(){ 
    $('.igSlide').css('left', '0');
});
//ig切換
var liIndex=1;

$('ul.igPostPoint').children('li').click(function(){
  liIndex = $(this).index();
  var picWidth = $('.igPostPicSingle').width();
  $(this).parent('ul.igPostPoint').siblings('.igSlide').css('left', -(liIndex*picWidth));
  
});

//計時
var ul_point = $('ul.igPostPoint') 
    ul_slide = $('.wrapAllDrinks').find('.igSlide'),
    isHover = false; //當滑鼠懸停 = 否 (js內建,需宣告
//滑鼠懸停就暫停輪播


ul_slide.hover(function(){
    isHover = true; 
    clearInterval(timer); //清除計時器
}, function(){
    isHover = false; 
    timer = setInterval(autoClick, 3000); //啟動計時器
});

//自動點擊下一個
function autoClick(){
    if(isHover) false;

    ul_point.each(function(){
        $(this).find('li').eq(liIndex).click();
        // console.log(`auto_i的數值:${liIndex}`);
        liIndex++;
        if(liIndex == 3){liIndex=0}
    }); 
};
    timer = setInterval(autoClick, 3000);
  


