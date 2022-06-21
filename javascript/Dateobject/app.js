let result;
let lead = document.getBySelector('.lead');
let date = new date();

//get full year
result = date.getFullYear();
lead.innerHTML = result

//get month
lead.innerHTML = date.getMonth();

//tolocalestring
result = date.toLocaleString();
lead.innerHTML = date.toLocaleString();
//lead.innerHTML = date.toLocaleString(nl-nl);



//lead.innerHTML = '$(hours):$(minutes):$(seconds)';
/*window.setInterval(UpdateTime,1000)
function UpdateTime(){
    let date2 = new date();
    var hours,minutes,seconds;
   hours = date.getHours();
   minutes = date.getMinutes();
    seconds = date.getSeconds();
    lead.innerHTML = '$(hours):$(minutes):$(seconds)';
}*/

var DaysInNederlands = ['zondag' ,'maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
lead.innerHTML = DaysInNederlands[date.getDay()];
result = date.setFullYear(2022)
console.log(result);