// 374dc5c317c74d87e4bfdeb767949857
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let cityInput=document.getElementById("cityInput")
let add=document.getElementById("add")
let cityoutput=document.getElementById("cityoutput")
let description=document.getElementById("description")
let tempinfo=document.getElementById("temp")
let windinfo=document.getElementById("wind")

const apikey="374dc5c317c74d87e4bfdeb767949857"
async function getweather(){
    let result=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apikey}`)
    let json= await result.json()
    // console.log(result);
    setinfo(json)
}
function setinfo(data){
    let cityname=data["name"];
    let desc=data["weather"][0]["description"];
    let temp=data["main"]["temp"];
    let wind=data["wind"]["speed"];

    cityoutput.innerHTML=`City name : ${cityname}`
    description.innerHTML=`description : ${desc}`
    tempinfo.innerHTML=`temp : ${tempvalue(temp)}`
    windinfo.innerHTML=`wind : ${wind} km.h`


}
add.addEventListener("click",getweather)

function tempvalue(value){
    return (value-273).toFixed(2)
}

























