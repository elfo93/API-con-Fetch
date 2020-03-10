//escuchar el boton 

//document.getElementById('provincia').addEventListener('click',getIp)

async function getIp() {
  try {
  let request = await fetch('http://api.openweathermap.org/data/2.5/weather?q=malaga&units=metric&appid=3408896f1d019f9845f9f0726d4dab41'); //'${provincia}

  let text = await request.text();
  let response = JSON.parse(text);
  
  console.log(response);

  //let provincia = document.getElementbyId('provincia').value
  document.querySelector('.heading').innerHTML = response.weather[0].description; 
  document.querySelector('.location').innerHTML = response.name;
  document.querySelector('.temp-value').innerHTML = Math.trunc(response.main.temp);
  document.querySelector('.humidity').innerHTML = response.main.humidity;
  document.querySelector('.wind-speed').innerHTML=  response.wind.speed; 
  return response;
  }
  catch (error) {
  console.log(`ERROR: ${error.stack}`);
  }
  //e.preventDefault();
}

getIp();

