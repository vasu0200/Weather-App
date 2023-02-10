
var btnn=document.getElementById('btn');
  btnn.addEventListener("click",()=>{
var url=`https://type.fit/api/quotes`
fetch(url)
.then ((result)=>result.json())
.then(data=>{
  var b=Math.floor(Math.random()*data.length);
  const{text}=data;
  const{author}=data;
  document.getElementById('qute').innerHTML=data[b].text;
 
  document.getElementById('atur').innerHTML=data[b].author;
})
  })
