'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//https://countries-api-836d.onrender.com/countries/

function renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
}

function renderCountry(data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1_000_000
      ).toFixed(1)} Million</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].nativeName}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
}
/*  //Old way
function getCountryAndNeighbor(input) {
  //AJAX call for country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${input}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    //Render country 1
    renderCountry(data);

    //AJAX call for neighbor countries
    const [neighbour] = data.borders;

    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
}

// getCountryAndNeighbor('portugal');
getCountryAndNeighbor('usa');
*/

// const request = fetch('https://restcountries.eu/rest/v2/name/usa');
//console.log(request);

function getJSON(url, errorMsg = 'Something went wrong:') {
  return fetch(url).then(response => {
    // console.log(response);
    if (response.status === 404) {
      throw new Error(`${errorMsg} Error ${response.status}`);
    }
    return response.json();
  });
}

// function getCountryData(country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (response.status === 404) {
//         throw new Error(`Country not found: Error ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//       );
//     })
//     .then(response => {
//       console.log(response);
//       if (response.status === 404) {
//         throw new Error(`Country not found: Error ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong. ${err.message}. Please try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }
// getCountryData('portugal');

function getCountryAndNeighbor(country) {
  getJSON(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
    'Country not found:'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) {
        throw new Error('No neighbour found!');
      }

      return getJSON(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
        'Country not found:'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong. ${err.message}. Please try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

function getCountryData(country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then(response => {
      // console.log(response);
      if (response.status === 404) {
        throw new Error(`${errorMsg} Error ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

btn.addEventListener('click', function () {
  getCountryData('belgium');
});

//Coding challenge
////////////////////////////////////////////////////

//lat, lon, key = '5f846c8a8fe1470aa05142c657118e27'
function whereAmI2() {
  getPosition().then(pos => {
    const { latitude: lat, longitude: lng } = pos.coords;

    let country = '';
    fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=5f846c8a8fe1470aa05142c657118e27`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `Sorry, we encountered a problem: Error ${response.error}`
          );
        }
        return response.json();
      })
      .then(data => {
        country = data.features[0].properties.country;
        console.log(
          `You are in ${data.features[0].properties.city}, ${data.features[0].properties.country}`
        );
        getCountryData(country);
      })
      .catch(err => console.log(err));
  });
}
// Test data 1
// whereAmI(52.508, 13.381);

// Test data 2
// whereAmI(19.037, 72.873);

// Test data 3
// whereAmI(-33.933, 18.474);

//5f846c8a8fe1470aa05142c657118e27
////////////////////////////////////////////////////

const whereAmIJonas = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => res.json())
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
    });
};

// whereAmIJonas(52.508, 13.381);
/*
console.log('Test start');

setTimeout(() => console.log('0 sec timer'), 0);

Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});

console.log('Test end');
*/
/* /////////////////////////////delete this row if needed
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw: The lottery has begun');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('you WIN 💰');
    } else {
      reject(new Error('you are a LOSER ❌🤣'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 more second'));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

whereAmI();

*/ ///////////////////////////////////////////////////
//CHALLENGE

// let challengeImage;
// function createImage(imgPath) {
//   return new Promise(function (resolve, reject) {
//     challengeImage = document.createElement('img');
//     challengeImage.src = imgPath;

//     challengeImage.addEventListener('load', function () {
//       document.querySelector('.images').append(challengeImage);
//       resolve(challengeImage);
//     });

//     challengeImage.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   })
//     .then(() => wait(2))
//     .then(() => (challengeImage.style.display = 'none'));
// }

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// createImage('img/img-1.jpg')
//   .then(() => createImage('img/img-2.jpg'))
//   .then(() => createImage('img/img-3.jpg'));

/*
This code has been refactored ///////

function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    challengeImage = document.createElement('img');
    challengeImage.src = imgPath;
    resolve(challengeImage);
    reject('Image not found');
  });
}

createImage('img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg')
  .then(image => document.querySelector('.images').append(image))
  .then(() =>
    challengeImage.addEventListener('load', function () {
      return challengeImage;
    })
  )
  .then(() => wait(2))
  .then(() => (challengeImage.style.display = 'none'))
  .then(() => createImage('img/img-2.jpg'))
  .then(image => document.querySelector('.images').append(image))
  .then(() =>
    challengeImage.addEventListener('load', function () {
      return challengeImage;
    })
  )
  .then(() => wait(2))
  .then(() => (challengeImage.style.display = 'none'))
  .then(() => createImage('img/img-3.jpg'))
  .then(image => document.querySelector('.images').append(image))
  .then(() =>
    challengeImage.addEventListener('load', function () {
      return challengeImage;
    })
  )
  .then(() => wait(2))
  .then(() => (challengeImage.style.display = 'none'))
  .catch(err => console.log(err));
*/
///////
async function whereAmI(country) {
  try {
    const res = await fetch(
      `https://countries-api-836d.onrender.com/countries/name/${country}`
    );
    if (!res.ok) {
      throw new Error('you are garbage ked');
    }
    const data = await res.json();

    getCountryData(data[0].name);
  } catch (err) {
    console.error(`${err.message} you loser`);
  }
}

// whereAmI('brazil');

// console.log('First');

// whereAmI('usa');

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(city);
//   } catch (err) {
//     console.log(`2: ${err.message}`);
//   }
//   console.log(`3: Finished getting location`);
// })();
/*
async function get3Countries(c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://countries-api-836d.onrender.com/countries/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://countries-api-836d.onrender.com/countries/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://countries-api-836d.onrender.com/countries/name/${c3}`
    // );

    const data = await Promise.all([
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err.message);
  }
}

get3Countries('usa', 'russia', 'laos');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long!'));
    }, s);
  });
};

Promise.race([
  getJSON(`https://countries-api-836d.onrender.com/countries/name/tanzania`),
  timeout(5000),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

Promise.allSettled([
  Promise.resolve('success!'),
  Promise.reject('You are a LOSER'),
  Promise.resolve("You're on a roll!"),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

Promise.any([
  Promise.resolve('success!'),
  Promise.reject('You are a LOSER'),
  Promise.resolve("You're on a roll!"),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
*/

let challengeImage;
function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    challengeImage = document.createElement('img');
    challengeImage.src = imgPath;

    challengeImage.addEventListener('load', function () {
      document.querySelector('.images').append(challengeImage);
      resolve(challengeImage);
    });

    challengeImage.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  })
    .then(() => wait(2))
    .then(() => (challengeImage.style.display = 'none'));
}

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

async function loadNPause(imgPath) {
  try {
    challengeImage = document.createElement('img');
    challengeImage.src = imgPath;
  }
}

// createImage('img/img-1.jpg')
//   .then(() => createImage('img/img-2.jpg'))
//   .then(() => createImage('img/img-3.jpg'));