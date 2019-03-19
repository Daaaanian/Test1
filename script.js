//进度条与已筹集爱心数量匹配
var pro = document.getElementById("Progress"),data=new Array();
var proText = document.getElementById("progressText");
var needLunch = 37500,allHeartCount = 15000000,alreadyHeartCount = 12348250,MyDonateHeart = 5600,MyDoanteLunch;
pro.value = (alreadyHeartCount.valueOf()/allHeartCount.valueOf())*100;
proText.innerHTML=Math.round(pro.value)+"%";
//得到我贡献的午餐份数
MyDoanteLunch = ((MyDonateHeart/allHeartCount)*needLunch);
if(data.MyDoanteLunch < 0) data.MyDoanteLunch = data.MyDoanteLunch.toFixed(2);
data.push(allHeartCount);
data.push(alreadyHeartCount);
data.push(MyDonateHeart);
data.push(MyDoanteLunch);

//数字的格式化，每三位数字添加一个逗号
var formatNumber = document.getElementsByClassName("formatNumber");
var FN = function(num){
    var num = (num || 0).toString(), result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) result = num + result; 
    return result;
}
for(let i=0;i<formatNumber.length;i++)
{
    formatNumber[i].innerHTML=FN(data[i]);
}

