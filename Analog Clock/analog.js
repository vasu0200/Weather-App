// setInterval(()=> {
//     var d = new Date(); //object of date()
//     var hr = d.getHours();
//     var mn = d.getMinutes();
//     var sc = d.getSeconds();
//     var hr_rotation = 30 * hr + mn / 2; //converting current time
//     var mn_rotation = 6 * mn;
//    var  sc_rotation = 6 * sc;


//     hour.style.transform = `rotate(${hr_rotation}deg)`;
//     min.style.transform = `rotate(${mn_rotation}deg)`;
//     sec.style.transform = `rotate(${sc_rotation}deg)`;
// }, 1000);


 function clock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hour = now.getHours();


  const secondsDegrees = ((seconds / 60) * 360);
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6);
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30);


  sec.style.transform = `rotate(${secondsDegrees}deg)`;
  min.style.transform = `rotate(${minsDegrees}deg)`;
  hour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(clock, 1000);

clock();