let calcButton = document.getElementById('calculate-button'),
    clickedBtn = document.getElementById('calculate-button-clicked'),
    resultList = document.getElementById('result-list'),
    cleanUpBtn = document.getElementById('cleanUp'),
    data = JSON.parse(localStorage.getItem("BMI_data")) ||[];

//第一次抓localStorage進ul
dataToUl();
//計算按鈕
calcButton.addEventListener("click",calcBMI);
//清除按鈕
cleanUpBtn.addEventListener("click",cleanUp);

//轉換Btn
function loopEvent(){
    calcButton.style.display="inline-block";
    clickedBtn.style.display="none";
    document.getElementById('height-input').value="";
    document.getElementById('weight-input').value="";
    clickedBtn.className='';
}
//得出BMI數字
function calcBMI(){
    let _height = document.getElementById('height-input').value,
        _weight = document.getElementById('weight-input').value,
        _BMIStr="",
        _BMILevel="";

    if(_height=="" || _weight== ""){
        alert("請輸入身高與體重");
        return;
    }
    pow_height = Math.pow(_height/100,2);//2次方
    let _BMI = _weight/pow_height;
    _BMI = Number.parseFloat(_BMI).toFixed(2);//四捨五入進小數點第2位
    // console.log(`檢查身高體重BMI:${_height},${_weight},${_BMI}`);

    //寫進結果顯示
    function whichLevel(str,level){
        clickedBtn.innerHTML= `${_BMI}<span>BMI</span><div id='clicked-result'>${str}</div><div id='calculate-button-clicked-loop'></div>`;
        clickedBtn.classList.add(level);
    }
    //判斷BMI屬於哪個區間
    if(_BMI<16){
        _BMIStr="嚴重過輕"; _BMILevel="underweight"; whichLevel(_BMIStr,_BMILevel);
    }else if(_BMI>=16 && _BMI<18.5){
        _BMIStr="過輕"; _BMILevel="underweight"; whichLevel(_BMIStr,_BMILevel);
    }else if(_BMI>=18.5 && _BMI<25){
        _BMIStr="理想"; _BMILevel="middle"; whichLevel(_BMIStr,_BMILevel);
    }else if(_BMI>=25 && _BMI<30){
        _BMIStr="過重"; _BMILevel="overweight"; whichLevel(_BMIStr,_BMILevel);
    }else if(_BMI>=30 && _BMI<35){
        _BMIStr="輕度肥胖"; _BMILevel="s-fat"; whichLevel(_BMIStr,_BMILevel);
    }else if(_BMI>=35 && _BMI<40){
        _BMIStr="中度肥胖"; _BMILevel ="m-fat"; whichLevel(_BMIStr,_BMILevel);
    }else if(_BMI>=40){
        _BMIStr="重度肥胖"; _BMILevel="l-fat"; whichLevel(_BMIStr,_BMILevel);
    }

    //取日期
    let dt = new Date(),
        _date="";
    _date = (dt.getMonth()+1)+"-"+dt.getDate()+"-"+dt.getFullYear();
    // console.log(`創建日期:${_date}`);

    //push進data
    let content={
        BMIStr:_BMIStr,//理想
        BMI:_BMI,//20.55
        weight:_weight,//體重
        height:_height,//身高
        date:_date,//日期
        BMILevel:_BMILevel//.middle
    }
    data.push(content);
    localStorage.setItem("BMI_data",JSON.stringify(data));

    //按鈕交換
    calcButton.style.display="none";
    clickedBtn.style.display="inline-block";

    //返回計算按鈕
    loopBtn = document.getElementById('calculate-button-clicked-loop');
    loopBtn.addEventListener("click",loopEvent);

    //更新ul內容
    dataToUl();
}

//從data寫進html裡
function dataToUl(){
        if(data==false){ //如果data是空的
            resultList.innerHTML="尚未有紀錄";
            return
        }
        let dataLength = data.length,
            str="",
            allStr="";
    for(i=0; i<dataLength; i++){
        str = `<li class='${data[i].BMILevel}'><div class='result-status'>${data[i].BMIStr}</div>
        <div class='result-BMI'><span>BMI</span>${data[i].BMI}</div>
        <div class='result-weight'><span>weight</span>${data[i].weight}kg</div>
        <div class='result-height'><span>height</span>${data[i].height}cm</div>
        <div class='result-time'>${data[i].date}</div>`;
        allStr= allStr+str;
    }
    resultList.innerHTML=allStr;
}

//清除紀錄
function cleanUp(){
    data=[];
    dataToUl();
    localStorage.removeItem("BMI_data");
}