const apiUrl = 'http://localhost:5000';

let timerId;

async function setRgbValues(red, green, blue) {
  const response = await fetch(`${apiUrl}/set_rgb_by_values`, {
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

function turnPower(status) {
  fetch(`${apiUrl}/power/${status ? 'turn_on' : 'turn_off'}`, {
    method: 'GET'
  });
}

async function setHexColor(color) {
    if(!timerId) {
    timerId = setTimeout(async () => {
      await fetch(`${apiUrl}/set_color_by_hex`, {
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
