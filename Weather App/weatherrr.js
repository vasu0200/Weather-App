var inp=document.getElementById("inp");
var btnn=document.getElementById("btn");
var num=document.getElementById("num");
var city=document.getElementById("location");
var climate=document.getElementById("climate");
var humid=document.getElementById("humid");
var icon=document.getElementById("iconn")
var apikey="c7d745a69926776473201bcebef0a63c";
btnn.addEventListener("click",()=>{
    if(inp.value=="")
    {
        alert("please enter city name");
    }
    else{
        var inpp=inp.value
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${inpp}&appid=${apikey}`
   fetch(url)
   .then((result)=>result.json())
   .then(data=>{
    console.log(data);
    const{name}=data;
    const{feels_like}=data.main;
    const{description}=data.weather[0];
    const{humidity}=data.main;
    const{icon}=data.weather[0];
    city.innerHTML=name;
    num.innerHTML=Math.floor(feels_like-273);
    climate.innerHTML=description;
    humid.innerHTML=humidity;
    icon.innerHTML=icon;
   })
   .catch(()=>{
    alert("no data found");
   }) 
}
})