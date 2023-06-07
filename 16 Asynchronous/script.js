'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   //   const res = await fetch("https://restcountries.com/v3.1/name/${country}")
//   //   const data = res.data;
//   //   console.log(data)

//   request.addEventListener('load', function () {
//     //   console.log(request.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const langsArr = Object.keys(data.languages);
//     const currenciesArr = Object.keys(data.currencies);

//     const html = `<article class="country">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}M people</p>
//     <p class="country__row"><span>🗣️</span>${langsArr.map(
//       item => '\t' + item.slice(0, 1).toUpperCase() + item.slice(1)
//     )}</p>
//     <p class="country__row"><span>💰</span>${
//       data.currencies[currenciesArr].name
//     }</p>
//   </div>
// </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// const countries = ['sudan', 'usa', 'north korea'];
// for (let i = 0; i <= countries.length; i++) {
//   getCountryData(countries[i]);
// }

///////////////////////////////// call back hell

const renderCountry = function (data) {
  const langsArr = Object.keys(data.languages);
  const currenciesArr = Object.keys(data.currencies);
  //   const cur = currenciesArr.map(item => item);
  console.log(currenciesArr);
  const html = `<article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${langsArr.map(
        item => '\t' + item.slice(0, 1).toUpperCase() + item.slice(1)
      )}</p>
      <p class="country__row"><span>💰</span>${currenciesArr.map(
        item => data.currencies[item].name
      )}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  //ajax call country
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    //   console.log(request.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log('data', data);
    //render country 1
    renderCountry(data);

    //get neighbour country
    const neighbour = data.borders;
    console.log(neighbour);

    if (!neighbour) return;
    // ajax call 2
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/v3.1/alpha?codes=${neighbour}`
    );
    request2.send();
    // console.log('request2:', request2);
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log('data2', data2);
      data2.map(item => renderCountry(item));
    });
  });
};
getCountryAndNeighbour('india');

/// using fetch

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//     });
// };

// getCountryData('russia');
