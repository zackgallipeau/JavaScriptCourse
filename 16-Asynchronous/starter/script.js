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
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
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
    console.log(response);
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
  getCountryData('usa');
});

//Coding challenge
////////////////////////////////////////////////////

function whereAmI(lat, lon, key = '5f846c8a8fe1470aa05142c657118e27') {
  let country = '';
  fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${key}`
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
}
// Test data 1
// whereAmI(52.508, 13.381);

// Test data 2
// whereAmI(19.037, 72.873);

// Test data 3
whereAmI(-33.933, 18.474);

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
