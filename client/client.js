const apiUrl = 'http://localhost:5000';
const apiBulbRoute = '/bulb';

let timerId;
let intervalId;
let uichanging = false;
let uichangingtimerId;


function init() {
  intervalId = setInterval(async () => {
    if(uichanging)
      return

    const response = await fetch(`${apiUrl}${apiBulbRoute}/props`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    const json = await response.json();

    if(!json) {
      //clearInterval(intervalId)
      return
    }
      
    setColorPicker(json);
    setPower(json);
    setBrightness(json);

  }, 500);
}

//Update the UI

function setBrightness(json) {
  const brightness = document.getElementById("brightness");
  brightness.value = json.bright
}

function setPower(json) {
  const power = document.getElementById("bulbpower");
  power.checked = json.power === 'on';
}

function setColorPicker(json) {
  const colorpicker = document.getElementById("colorpicker");
  color_int = parseInt(json.rgb);

  var binaryStr = color_int.toString(2).padStart(24, '0');
  var hexStr = '';

  for (var i = 0; i < 3; i++) {
    var byte = binaryStr.substr(i * 8, 8);
    var hexByte = parseInt(byte, 2).toString(16).padStart(2, '0');
    hexStr += hexByte;
  }

  colorpicker.value = "#" + hexStr;
}


//Requests from server


function brightnessChanged(event) {
  event.preventDefault();
  UIChanged()

  if(!timerId) {
    timerId = setTimeout(async () => {
    fetch(`${apiUrl}${apiBulbRoute}/brightness`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        value: event.target.valueAsNumber
      })
    });
  
    timerId = null;
  }, 200)

  //Dont change the UI !!
  //event.target.value = !event.target.checked
  }
}

function powerchanged(event) {
  event.preventDefault();
 
  fetch(`${apiUrl}${apiBulbRoute}/power`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      status: event.target.checked
    })
  });

  //Dont change the UI !!
  event.target.checked = !event.target.checked
}

async function setRgbValues(red, green, blue) {
  const response = await fetch(`${apiUrl}${apiBulbRoute}/color_by_rgb`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      red: red,
      green: green,
      blue: blue
    })
  });

  const json = await response.json();
  console.log(json.message);
}

async function turnPower(status) {
  await fetch(`${apiUrl}${apiBulbRoute}/power`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      status: status
    })
  });
}

async function setHexColor(color) {
    if(!timerId) {
      UIChanged()
    timerId = setTimeout(async () => {
      await fetch(`${apiUrl}${apiBulbRoute}/color_by_hex`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          color: color.split("#")[1]
        })
      });

      timerId = null;
    }, 50)
  }
}

//Misc
function UIChanged() {
  uichanging = true
  if(!uichangingtimerId)
  uichangingtimerId = setTimeout(() => {
    uichanging = false
    uichangingtimerId = null
  }, 500);
}