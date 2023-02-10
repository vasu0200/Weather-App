var deadline=new Date("nov 23, 2022 14:23:40 ").getTime();
var x=setInterval(function clock()
{
    var now=new Date().getTime();
    var remainingtime=deadline-now;
    var days=Math.floor(remainingtime/(1000*60*60*24));
    var hours=Math.floor(remainingtime%(1000*60*60*24)/(1000*60*60));
    var minute=Math.floor(remainingtime%(1000*60*60)/(1000*60));
    var second=Math.floor(remainingtime%(1000*60)/(1000));
    document.getElementById('countdown').innerHTML=days+"d:"+hours+"h:"+minute+"m:"+second+"s:";
    if(remainingtime<0)
    {
        clearInterval(x);
        document.getElementById('countdown').innerHTML="its over";
        document.getElementById('countdown').style.backgroundImage="url(https://th.bing.com/th/id/OIP.yuQdf3cFc6IWhTSiB_h1JAHaHa?pid=ImgDet&rs=1)";
        document.getElementById('countdown').style.backgroundSize="cover"
       
    }
    
},1000);