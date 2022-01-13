//用 .onload 的方式接著觸發整個js
let xhr = new XMLHttpRequest(),
    data = [];
xhr.open('get','https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c')
xhr.send(null);
xhr.onload = function(){
    let str = JSON.parse(xhr.responseText)
    data = str.data.XML_Head.Infos.Info;
    console.log(data);

let zipData = { "800":"新興區","801":"前金區","802":"苓雅區","803":"鹽埕區","804":"鼓山區","805":"旗津區","806":"前鎮區","807":"三民區","811":"楠梓區","812":"小港區","813":"左營區","814":"仁武區","815":"大社區","820":"岡山區","821":"路竹區","822":"阿蓮區","823":"田寮區","824":"燕巢區","825":"橋頭區","826":"梓官區","827":"彌陀區","828":"永安區","829":"湖內區","830":"鳳山區","831":"大寮區","832":"林園區","833":"鳥松區","840":"大樹區","842":"旗山區","843":"美濃區","844":"六龜區","845":"內門區","846":"杉林區","847":"甲仙區","848":"桃源區","849":"那瑪夏區","851":"茂林區","852":"茄萣區"};
let dataLength = data.length,
    infoContent = document.getElementById('district-info-content'),
    districtSelect = document.getElementById('choose-district'),
    _next = document.getElementById('list-next'),
    _prev = document.getElementById('list-prev'),
    districtName = document.getElementById('district-name'),
    ul_pop = document.getElementById('pop'),
    zipList = [],
    results={};

console.log(`總共${dataLength}筆資料`);
//熱門區域-取景點最多的前6名
function popDistrict(){
    let list = [],
        allStr = "";
    for(i=0; i<dataLength; i++){
        list[i] = data[i].Zipcode;
    }
    //統計每個區的數量-輸出為物件形式
    list.forEach(function(item){
        results[item] = results[item] ? results[item]+1 : 1;
    });
    //轉化為陣列資料-篩出數量大於10的區域-key為物件屬性的名稱
    let _six=[];
    Object.getOwnPropertyNames(results).forEach(function(key){
        if(results[key]>10){
            let content = {name:key,value:results[key]};
            _six.push(content);
        };
    });
    //依value的大小作排序 (sort基礎:a大於b的話 返回正數 則b往前放(由大到小))
    _six.sort(function(a,b){
        if(a['value']>b['value']){ return -1}
        else if(a['value']<b['value']){return 1}
        return 0;
    });
    let topSix = _six.slice(0,6); //取前六
    // console.log(topSix);
    for(i=0; i<topSix.length; i++){
        let num = topSix[i].name,
            code = zipData[num],
            content = `<li class="pop-district-single">${code}</li>`;
        allStr += content;
    }
    ul_pop.innerHTML=allStr;
}
popDistrict();
let popBtn = document.getElementById('pop');
popBtn.addEventListener('click',function(e){
    if(e.target.nodeName === "LI"){
        let _text = e.target.innerText,
            all_option = districtSelect.querySelectorAll('option'),
            _length = all_option.length;
        districFilter(e);
        for(i=0; i<_length; i++){
            if(all_option[i].value == _text){
                // console.log(`是第${i+1}個`);
                districtSelect.selectedIndex= i; //selected變成相對應的第i個
                break;
            }
        }
    }else{
        return /*console.log(`不是li`);*/
    }
});

//檢查data裡所有的zipcode，集成陣列
for(i=0; i<dataLength; i++){
    let zipCode = data[i].Zipcode,
        codeString = zipData[zipCode];
    zipList.push(codeString);
}
    //去掉重複的區
zipList = zipList.filter(function(element,index,arr){
    return arr.indexOf(element)===index;
});

    //寫成下拉選單的項目
let zipListLength = zipList.length,
    selectString = `<option value="none" disabled selected>--請選擇行政區--</option><option value="全部">全部</option>`;
for(i=0; i<zipListLength; i++){
    let content = "";
    content = `<option value="${zipList[i]}">${zipList[i]}</option>`;
    selectString += content; 
}
districtSelect.innerHTML = selectString;

//篩出特定區域的資料
function districFilter(e){
    let _value = e.target.value || e.target.innerText;
        filterList=[];
    for(i=0; i<dataLength;i++){
        let zipCode = data[i].Zipcode,
            codeString = zipData[zipCode];
            
        if(_value == codeString){
            filterList.push(data[i]);
        }else if(_value === "全部"){
            filterList = Array.from(data);
        }
    }

    // console.log(filterList);
    let filterLength = filterList.length;
    _next.removeEventListener('click',nextPage);
    _prev.removeEventListener('click',prevPage);
    makePageNum(filterLength,filterList);
    pageNumClick(1,filterLength,filterList);
    districtName.innerText=_value;
}
districtSelect.addEventListener('change',districFilter);

//製作頁碼
function makePageNum(length,arr){
    let pageTotalNum = Math.ceil(length/20), //一頁20筆資料，無條件進位取整數，頁數
        pageNumList = document.getElementById('page-num-list'),
        allLiStr = '';
    for(i=0; i<pageTotalNum; i++){
        content = "<li>"+(i+1)+"</li>";
        allLiStr = allLiStr + content;
    }
    pageNumList.innerHTML= allLiStr;

    let firstPage = document.querySelector('#page-num-list li:nth-child(1)')
    firstPage.classList.add('on');
    //綁定頁碼動作
    let liAll = document.querySelectorAll('#page-num-list li'),
        liLength = liAll.length;
    for(i=0; i<liLength; i++){
    liAll[i].addEventListener('click',function(e){
        let liNum = e.target.innerHTML;
        pageNumClick(liNum,length,arr);
        let current = document.querySelectorAll('#page-num-list li.on');
        current[0].className = current[0].className.replace('on',''); //把目前li的on替換成空值
        this.className += 'on';//在點選的li的class裡加入on
    });
    }
    nextPage = function(){
        let numList = document.querySelectorAll('ul#page-num-list li.on'),
            numHasOn = numList[0].innerText;
        numHasOn = Number(numHasOn)+1;
        if(pageTotalNum == numHasOn-1){
            return console.log(`最後一頁了`);
        }else{
            pageNumClick(numHasOn,length,arr);
            numList[0].classList.remove('on');
            liAll[numHasOn-1].classList.add('on');
        }
    };
    prevPage = function(){
        let numList = document.querySelectorAll('ul#page-num-list li.on'),
            numHasOn = numList[0].innerText;
        numHasOn = Number(numHasOn)-1;
        if(numHasOn+1 == 1){
            return console.log(`第一頁`);
        }else{
            pageNumClick(numHasOn,length,arr);
            numList[0].classList.remove('on');
            liAll[numHasOn-1].classList.add('on');
        }
    };

    _next.classList.add('active');
    _prev.classList.remove('active');
    _next.addEventListener('click',nextPage);
    _prev.addEventListener('click',prevPage);
}
makePageNum(dataLength,data);//首次開啟時的頁碼

//點擊頁碼後抓資料顯示在網頁上
function pageNumClick(clickNum,length,arr){
    let startNum = (clickNum-1)*20,
        finalNum = clickNum*20-1,
        allContentStr="",
        pageTotalNum = Math.ceil(length/20);
    console.log(`有click，總共${pageTotalNum}頁，現在第${clickNum}頁`)
    if(clickNum == pageTotalNum ){
        _next.classList.remove('active');
    }else{
        _next.classList.add('active');
    }
    if(clickNum == 1 ){
        _prev.classList.remove('active');
    }else{
        _prev.classList.add('active');
    }

    for(i=startNum; i<finalNum+1; i++){
        if(i == length){
            console.log(`-end-共${length}筆資料`);
            break;
        }
        zipCode = arr[i].Zipcode;
        content = `<div class='district-info-content-single'><div class='district-info-content-single-img'><img src='${arr[i].Picture1}' alt='${arr[i].Picdescribe1}'>
        <h3 class='district-info-content-single-title'>${arr[i].Name}</h3>
        <div class='district-info-content-single-district'>${zipData[zipCode]}</div></div>
        <div class='district-info-content-single-time'>${arr[i].Opentime}</div>
        <div class='district-info-content-single-address'>${arr[i].Add}</div>
        <div class='district-info-content-single-phone'>${arr[i].Tel}</div>
        <div class='district-info-content-single-tag'>${arr[i].Remarks}</div></div>`
        allContentStr = allContentStr + content;//疊加內容
    }
    infoContent.innerHTML = allContentStr;
}
pageNumClick(1,dataLength,data);

};//xhr.onload-end