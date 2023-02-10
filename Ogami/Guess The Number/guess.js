var input=document.getElementById("inp").value;
var hint=document.getElementById("screen");
var guesss=document.getElementById("guess");
var chance=document.getElementById("chance");
var btnn=document.getElementById("btn");
var a=Math.floor(Math.random()*100);
console.log(a);
// guess.innerHTML=a;
if(a<10){
    hint.innerHTML="iam a child";
}
else if((a>10) && (a<30)){
    hint.innerHTML="iam a young";
}
else if((a>30) && (a<50)){
    hint.innerHTML="iam a Workers";
}
else if((a>50) && (a<80)){
    hint.innerHTML="iam a retaired";
}
else if((a>80) && (a<100)){
    hint.innerHTML="iam a Deathed";
}


btnn.addEventListener("click",()=>{


if(a==input.value)
{
    hint.innerHTML="you win the game";
    guesss.innerHTML=a;
}
else{
        chance --;
        if(chance>0){
            document.getElementById("chance").innerHTML=chance;
        }
        else if(chance==0){
            document.getElementById("chance").innerHTML=chance;
            document.getElementById("inp").innerHTML=guesss;
        }
        document.getElementById("screen").innerHTML="you loss the game";

}
})