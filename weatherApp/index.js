// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function getWeather(){
    let city = document.getElementById("city").value
   
    try{
        
     let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a4278c548f6ea5f1cad046be4337f47e`)
    let data = await res.json()
sevday()
    today(data)
    }

catch(e){
console.log("e",e)
}

var div = document.querySelector("#map")
var x = `<iframe width="600" height="500" id="mape" src="https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>`

div.innerHTML = x
}

 
function today(a){
    var temp = a.main.temp
    var pre = a.main.pressure
    var hum = a.main.humidity
    var tempma = a.main.temp_max
    var tempmi = a.main.temp_min
    
console.log(a);
    let div= document.getElementById("t1")

    var x = ``

    x += `
<h1>Today Temperature</h1>
<h3>Temperature = ${Math.round(temp-273)}°</h3>
<h3>Temperature Max= ${Math.ceil(tempma-273)}°</h3>
<h3>Temperature Min= ${Math.floor(tempmi-273)}°</h3>
<h3>Pressure = ${pre}</h3>
<h3>Humidity = ${hum}</h3>`

    div.innerHTML = x
}






async function sevday(){
    let div1= document.getElementById("t2")

    let city = document.getElementById("city").value
        try{
            
var obj = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a4278c548f6ea5f1cad046be4337f47e`)
let sev = await obj.json()

for(var i=0; i<sev.list.length; i = i+8){
let h = sev.list[i].main
var m = sev.list[i]
let tempmax = h.temp_max
let tempmin = h.temp_min
var date = m.dt_txt.slice(0, 10);
console.log(sev)
var div = document.createElement("div")
div.setAttribute("id","t3")
var x = ``

x += `<div style="color:rgb(254,68,52) ;">${date}</div>
    <h4 style="color:blanchedalmond;">${Math.floor(tempmax-273)}°</h4>
    <h4 style="color:blanchedalmond;">${Math.ceil(tempmin-273)}°</h4>`

div.innerHTML = x
div1.append(div)

}
}
        
catch(e){
    console.log("sevday function error",e)
}
    }





