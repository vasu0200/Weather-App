


 function next1()
{
    document.getElementById('m1').style.display="none";
    document.getElementById('m2').style.display="block";
}
function prev1()
{
    document.getElementById('m2').style.display="block";
    document.getElementById('m1').style.display="none";
}
function next2()
{
    document.getElementById('m1').style.display="block";
    document.getElementById('m2').style.display="none";
}
function prev2()
{
    document.getElementById('m1').style.display="block";
    document.getElementById('m2').style.display="none";
}


// var a=document.getElementById('pics');

            
//             var url=`  https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish`
//             fetch(url).then((result)=>result.json())
//             .then(data=>{
//             console.log(data.data);
//         data.data.map((e)=>{
//             var b=document.createElement('img');
//             var c=document.createElement("h4")
//             a.appendChild(b);
//             b.setAttribute("src",e.image.thumbnail);
//             b.appendChild(c);
//             b.style.border="1px solid"
//             c.innerHTML=e.name;
  
//         })
//             })
//             .catch(()=>{
//                 alert("no data found");
//                }) 


 
 fetch(" https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish")
 .then((result)=>result.json())
 .then (data=>{   
        data.data.map((k)=>{
            const disc=eval(k.price-10/100);
            const a=
              `<div class="imgg">
              <img src=${k.image.thumbnail} />
              <div class="font"> ${k.name}<br>
            ($${disc})<strike>$${k.price}.00</strike> <br>
             
              </div>
              <div id=icon>
              
                  <ion-icon name="heart-outline"></ion-icon>
              
                  <ion-icon name="bag-remove-outline"></ion-icon>
              
                  <ion-icon name="shuffle-outline"></ion-icon>
             
                  <ion-icon name="eye-outline"></ion-icon>

              </div>
              <div id="butn">
              <button id="add">Add To Cart</button>
              <button id="bt">+<button> 
              </div>
              
              </div>`
              const b=document.getElementById("pics")
              b.innerHTML+=a
              console.log(k);
        })

 })



    







// https://demoapus2.com/ogami/wp-admin/admin-ajax.php?
