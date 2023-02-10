var inp = document.getElementById('inp');
var btnn = document.getElementById('btn');
var a = document.getElementById('pics');

btnn.addEventListener("click", () => {
    if (inp.value == "") {
        alert("please enter meal name");
    }
    // else {
    //     var inpp = inp.value;

    //     var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inpp}`
    //     fetch(url).then((result) => result.json())
    //         .then(data => {
    //             console.log(data);
    //             data.meals.map((e) => {
    //                 var b = `<div>
    //             <img src="${e.strMealThumb}" />
    // </div>
    // `
    //         a.innerHTML += b;

    //             });
    //         })

    //             })
    //         }
    // })


    else {
        var inpp = inp.value
        var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inpp}`
        fetch(url).then((result) => result.json())
            .then(data => {
                console.log(data);
                if (data.meals == null) {
                    alert("no recipies")
                }
                else {
                    data.meals.map((e) => {
                        var b = `<div>
                     <img src="${e.strMealThumb}" />
         </div>
         `
                        a.innerHTML += b;
                    })
                }

            })


    }








})
