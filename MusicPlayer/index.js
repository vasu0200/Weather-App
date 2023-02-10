const playpause=document.getElementById("playpause");
const nex=document.getElementById("next");
const prev=document.getElementById("prev");
const wishlist=document.getElementById("wl");
const repeat=document.getElementById("repeat");
const allsongs=document.getElementById("allsongs");
const recent=document.getElementById("recent");
const albums=document.getElementById("albums");
const artists=document.getElementById("artists");
const sname=document.getElementById("sname");
const allslist=document.getElementById("allslist");
const recentlist=document.getElementById("recentlist");
const albumlist=document.getElementById("albumlist");
const artistlist=document.getElementById("artistlist");
const imgholder=document.getElementById("imgholder");
const songimg=document.getElementById("songimg");
const inputval=document.querySelector("#search");
const list=document.getElementById("list");
const player=document.getElementById("player");
const searchbtn=document.getElementById("sbtn");
const audio = document.querySelector(".aud")

console.log(inputval)
inputval.addEventListener("change",()=>{
    const url=`https://saavn.me/search/songs?query=${inputval.value}`;

const fetchData = async()=>{
    console.log(url);
    const data = await axios.get(url)
    console.log(data);
    data && data.data && data.data.data && data.data.data.results.map(e=>{

       albumlist.innerHTML +=`<img src="${e.image[2].link}" name="${e.title}" class="imggg" alt="${e.downloadUrl[2].link}" style="width:25%;margin:1rem;">`;
       const imggg=document.querySelector(".imggg");
       console.log(imggg.alt);
       audio.setAttribute("src",imggg.alt) 
    //    imggg.forEach((movie)=>{
    //     movie.addEventListener("click",()=>{
              
    //     })
    //    })
       
        console.log(e);

        songimg.innerHTML +=`<img src="${e.image[2].link}" name="${e.title}" class="imgggg" alt="${e.downloadUrl[2].link}" style="width:100%;">`;
       const imgggg=document.querySelector(".imgggg");
       console.log(imgggg.alt);
        imgggg.style.width="100%";
        imgggg.style.height="100%";
       imgggg.forEach((movie)=>{
        movie.addEventListener("click",()=>{ 
        })
       }) 


      playpause

    });


}
fetchData()

})


allsongs.addEventListener("click",()=>{
    allsongs.style.boxShadow="0 0 7px 2px rgb(40, 40, 40) inset";
    albums.style.boxShadow="none";
    artists.style.boxShadow="none";
    recent.style.boxShadow="none";
    albumlist.style.display="none";
    recentlist.style.display="none";
    artistlist.style.display="none";
    allslist.style.display="block";
})

albums.addEventListener("click",()=>{
    albums.style.boxShadow="0 0 7px 2px rgb(40, 40, 40) inset";
    allsongs.style.boxShadow="none";
    artists.style.boxShadow="none";
    recent.style.boxShadow="none";
    allslist.style.display="none";
    recentlist.style.display="none";
    artistlist.style.display="none";
    albumlist.style.display="block";
})

artists.addEventListener("click",()=>{
    artists.style.boxShadow="0 0 7px 2px rgb(40, 40, 40) inset";
    albums.style.boxShadow="none";
    allsongs.style.boxShadow="none";
    recent.style.boxShadow="none";
    allslist.style.display="none";
    recentlist.style.display="none";
    albumlist.style.display="none";
    artistlist.style.display="block";
})

recent.addEventListener("click",()=>{
    recent.style.boxShadow="0 0 7px 2px rgb(40, 40, 40) inset";
    albums.style.boxShadow="none";
    allsongs.style.boxShadow="none";
    artists.style.boxShadow="none";
    albumlist.style.display="none";
    artistlist.style.display="none";
    allslist.style.display="none";
    recentlist.style.display="block";
})