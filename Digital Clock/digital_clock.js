function clock()
{
  var a=new Date();
  var h=a.getHours();
  var m=a.getMinutes();
  var s=a.getSeconds();
  var am_pm="AM";
  if(h>12){
    h-=12;
    am_pm="PM";
  }
  if(h==0){
    am_pm="AM";
  }
  if(h==12){
    am_pm="PM";
  }
 h=(h<10)?"0"+h:h;
 m=(m<10)?"0"+m:m;
 s=(s<10)?"0"+s:s;

document.getElementById('div').innerHTML=h+":"+m+":"+s+" "+am_pm;
setInterval(clock,1000);
}
clock();
