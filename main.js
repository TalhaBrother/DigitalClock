var hour=document.getElementById('hr');
var minute=document.getElementById('min');
var second=document.getElementById('sec');
var TodaysDate=document.getElementById('date')
var day=document.getElementById('am')
TodaysDate.innerText=new Date();
console.log(hour.innerText)


setInterval(function(){
    var currentDate=new Date();
    if(currentDate.getHours()>12){
        hour.innerText=currentDate.getHours()-12;
        day.innerText="PM";
    }
    else if(currentDate.getHours()===0){
        hour.innerText= 12;
    }
    else{
        hour.innerText=currentDate.getHours();
    }
    minute.innerText=currentDate.getMinutes();
    second.innerText=currentDate.getSeconds();
},1000)