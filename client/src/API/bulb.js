const apiUrl = 'http://localhost:5500';
const apiBulbRoute = '/bulb';
let timerId;

async function setPower(status) {
  await fetch(`${apiUrl}${apiBulbRoute}/power`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      status: status,
    }),
  });
}

async function setBrightness(brightness) {
  if (!timerId) {
    timerId = setTimeout(async () => {
      fetch(`${apiUrl}${apiBulbRoute}/brightness`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          value: brightness,
        }),
      });
      console.log('SENT-' + brightness);

      timerId = null;
    }, 200);
  }
}

async function setWeatherMode() {
  await fetch(`${apiUrl}${apiBulbRoute}/weather_color`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function getBulbData() {
  const response = await fetch(`${apiUrl}${apiBulbRoute}/props`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res)
    .catch((err) => {
      //   bulbContainer.classList.remove(...bulbContainer.classList);
      //   bulbContainer.classList.add('hide');
    });

  const json = await response.json();

  //   if(!json) {
  //     //clearInterval(intervalId)
  //     bulbContainer.classList.remove(...bulbContainer.classList);
  //     bulbContainer.classList.add("hide")
  //     return
  //   }

  return json;
}

export { setPower, getBulbData, setBrightness, setWeatherMode };
