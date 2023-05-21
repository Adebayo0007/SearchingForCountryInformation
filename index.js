// 'use strict';
// body = document.querySelector('#body');
// countryTable = document.querySelector('#countries');
// search = document.querySelector('.search-search');
// button = document.querySelector('#completed-task');
// btn = document.querySelector('#btn');


// ///////////////////////////////////////////////////////////////////////////
// ///////////////////////////Know your Country ////////////////////////////
// ////////////////////////////////////////////////////////////////////////
// class Application {
 
//   constructor() {
//     //these are the even we want to load at the first time of oning the application
//     btn.addEventListener('click', this._getCountry);
//     document.addEventListener('keydown', (e) => {
//       if (e.key === 'Enter') {
//         this._getCountry;
//       }
//     });
//     button.addEventListener('click', this._getCountry);
//   }
//   //the function that load the datas fron the third party
//   _getCountry() {
//     // this.#search.value = '';
//     const request = new XMLHttpRequest();
//     request.open(
//       'GET',
//       `https://restcountries.com/v2/name/${search.value.toLowerCase()}`
//     );
//     request.send();
//     request.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);
//       console.log(data);
//       countryTable.innerHTML = '';
//       this._displayCountry(data, 'Neighbouring country');

//       //rendering the neighbour country
//       const neighbour = data.borders[0];
//       console.log(neighbour);
//       if (!neighbour) return;
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//       request2.send();
//       request2.addEventListener('load', function () {
//         console.log(this.responseText);
//         const data1 = JSON.parse(this.responseText);
//         // console.log(data1);
//         this._diaplayCountry(data1);
//         console.log(data.latlng);
//         var map = L.map('map').setView(data.latlng, 13);
//         L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//           attribution: 'Map data © OpenStreetMap contributors',
//         }).addTo(map);
//         //these are for the location symbol
//         L.marker(data.latlng)
//           .addTo(map)
//           .bindPopup(
//             'Your location.<br> <span style="color:red">Work Out</span>'
//           )
//           .openPopup();
//         //customizing ur location symbol
//         map.on('click', function (mapEvent) {
//           const { lat, lng } = mapEvent.latlng;
//           L.marker([lat, lng])
//             .addTo(map)
//             .bindPopup(
//               L.popup({
//                 minWidth: 250,
//                 maxWidth: 100,
//                 autoClose: false,
//                 closeOnClick: false,
//                 className: 'popupStyle',
//               })
//             )
//             .setPopupContent('Workout')
//             .openPopup();
//         });
//       });
//     });
//   }

//   //Function that is displaying the country
//   _displayCountry(countryData, neighbour = '') {
//     countryTable.innerHTML += `<div>
//     <div id="country-image"><img src="${countryData.flag}" alt="flag" /></div>
//     <div id="country-details">
//       <span id="country-name">${countryData.name}</span>
//       <div><span id="country-region">${countryData.capital}</span></div>
//       <div><span id="country-region">👩🏼‍🤝‍🧑🏻</span><span>${(
//         countryData.population / 1000000
//       ).toFixed(1)} people</span></div>
//       <div><span>📢</span><span>${countryData.languages[0].name}</span></div>
//       <div><span>💰</span><span>${countryData.currencies[0].name}</span></div>
//       <div><span>📳</span><span>${countryData.callingCodes[0]}</span></div>
//       <div><span>🚩</span><span>${countryData.region}</span></div>
//       <div><span>Sub 🚩</span><span>${countryData.subregion}</span></div>
//       <div><span>🕔</span><span>${countryData.timezones[0]}</span></div>
//     </div>
//   </div><span>${neighbour}</span>`;
//   }
// }
// const app = new Application();

'use strict';
let body = document.querySelector('#body');
let countryTable = document.querySelector('#countries');
let search = document.querySelector('.search-search');
let button = document.querySelector('#completed-task');

// asyncroneous programing using XMLHttpRequest
const displayCountryUsingXMLHttpRequest = function () {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.com/v2/name/${search.value.toLowerCase()}`
  );
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    countryTable.innerHTML = '';
    diaplayCountry(data, 'Neighbouring country');

    //rendering the neighbour country
    const neighbour = data.borders[0];
    console.log(neighbour);
    if (!neighbour) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      console.log(this.responseText);
      const data1 = JSON.parse(this.responseText);
      // console.log(data1);
      diaplayCountry(data1);
      console.log(data.latlng);
      var map = L.map('map').setView(data.latlng, 13);
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: 'Map data © OpenStreetMap contributors',
      }).addTo(map);
      //these are for the location symbol
      L.marker(data.latlng)
        .addTo(map)
        .bindPopup('Your location.<br> <span style="color:red">Work Out</span>')
        .openPopup();
      //customizing ur location symbol
      map.on('click', function (mapEvent) {
        const { lat, lng } = mapEvent.latlng;
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              minWidth: 250,
              maxWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'popupStyle',
            })
          )
          .setPopupContent('Workout')
          .openPopup();
      });
    });
  });
};

const diaplayCountry = function (countryData, neighbour = '') {
    countryTable.innerHTML += `<div>
    <div id="country-image"><img src="${countryData.flag}" alt="flag" /></div>
    <div id="country-details">
      <span id="country-name">${countryData.name}</span>
      <div><span id="country-region">${countryData.capital}</span></div>
      <div><span id="country-region">👩🏼‍🤝‍🧑🏻</span><span>${(
        countryData.population / 1000000
      ).toFixed(1)} people</span></div>
      <div><span>📢</span><span>${countryData.languages[0].name}</span></div>
      <div><span>💰</span><span>${countryData.currencies[0].name}</span></div>
      <div><span>📳</span><span>${countryData.callingCodes[0]}</span></div>
      <div><span>🚩</span><span>${countryData.region}</span></div>
      <div><span>Sub 🚩</span><span>${countryData.subregion}</span></div>
      <div><span>🕔</span><span>${countryData.timezones[0]}</span></div>
    </div>
  </div><span>${neighbour}</span>`;
  };
  // you can generate with the generate button
  document.querySelector('#btn').addEventListener('click', () => {
    // countryTable.innerHTML ='';
    displayCountryUsingXMLHttpRequest();
    // whereAmI();
    search.value = '';
  });
  // you can generate with the search button
  button.addEventListener('click', () => {
    // countryTable.innerHTML ='';
    displayCountryUsingXMLHttpRequest();
    // whereAmI();
    search.value = '';
  });
  
  // you can generate by pressing enter
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      // countryTable.innerHTML ='';
      e.preventDefault();
      displayCountryUsingXMLHttpRequest();
      // whereAmI();
      search.value = '';
    }
  });

// asyncroneous programing using XMLHttpRequest
// const displayCountryUsingXMLHttpRequest = function () {...
  //   const request = new XMLHttpRequest();
  //   request.open(
  //     'GET',
  //     `https://restcountries.com/v2/name/${search.value.toLowerCase()}`
  //   );
  //   request.send();
  //   request.addEventListener('load', function () {
  //     const [data] = JSON.parse(this.responseText);
  //     console.log(data);
  //     countryTable.innerHTML = '';
  //     diaplayCountry(data, 'Neighbouring country');
  //     //rendering the neighbour country
  //     const neighbour = data.borders[0];
  //     console.log(neighbour);
  //     if (!neighbour) return;
  //     const request2 = new XMLHttpRequest();
  //     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
  //     request2.send();
  //     request2.addEventListener('load', function () {
  //       console.log(this.responseText);
  //       const data1 = JSON.parse(this.responseText);
  //       // console.log(data1);
  //       diaplayCountry(data1);
  //       console.log(data.latlng);
  //       var map = L.map('map').setView(data.latlng, 13);
  //       L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  //         attribution: 'Map data © OpenStreetMap contributors',
  //       }).addTo(map);
  //       //these are for the location symbol
  //       L.marker(data.latlng)
  //         .addTo(map)
  //         .bindPopup('Your location.<br> <span style="color:red">Work Out</span>')
  //         .openPopup();
  //       //customizing ur location symbol
  //       map.on('click', function (mapEvent) {
  //         const { lat, lng } = mapEvent.latlng;
  //         L.marker([lat, lng])
  //           .addTo(map)
  //           .bindPopup(
  //             L.popup({
  //               minWidth: 250,
  //               maxWidth: 100,
  //               autoClose: false,
  //               closeOnClick: false,
  //               className: 'popupStyle',
  //             })
  //           )
  //           .setPopupContent('Workout')
  //           .openPopup();
  //       });
  //     });
  //   });
// };...

//function for displaying country
// const diaplayCountry = function (countryData, neighbour = '') {...
  //   countryTable.innerHTML += `<div>
  //     <div id="country-image"><img src="${countryData.flag}" alt="flag" /></div>
  //     <div id="country-details">
  //       <span id="country-name">${countryData.name}</span>
  //       <div><span id="country-region">${countryData.capital}</span></div>
  //       <div><span id="country-region">👩🏼‍🤝‍🧑🏻</span><span>${(
  //         countryData.population / 1000000
  //       ).toFixed(1)} people</span></div>
  //       <div><span>📢</span><span>${countryData.languages[0].name}</span></div>
  //       <div><span>💰</span><span>${countryData.currencies[0].name}</span></div>
  //       <div><span>📳</span><span>${countryData.callingCodes[0]}</span></div>
  //       <div><span>🚩</span><span>${countryData.region}</span></div>
  //       <div><span>Sub 🚩</span><span>${countryData.subregion}</span></div>
  //       <div><span>🕔</span><span>${countryData.timezones[0]}</span></div>
  //     </div>
  //   </div><span>${neighbour}</span>`;
// };...
// you can generate with the generate button

// document.querySelector('#btn').addEventListener('click', (e) => {
//   e.preventDefault();...

  //   displayCountryUsingXMLHttpRequest();
  //   search.value = "";
// });...
// you can generate with the search button
// button.addEventListener('click', () => {
//   e.preventDefault();...

  // countryTable.innerHTML ='';
  //   displayCountryUsingXMLHttpRequest();
  // whereAmI();
  //   search.value = "";
// });...

// you can generate by pressing enter
// document.addEventListener('keydown', (e) => {...
//   if (e.key === 'Enter') {
//     // countryTable.innerHTML ='';
//     e.preventDefault();
//     displayCountryUsingXMLHttpRequest();
//     // whereAmI();
//     search.value = '';
 // }
// });...
