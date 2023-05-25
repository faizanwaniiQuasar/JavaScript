'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelevery: function ({ time, addres, mainIndex, starterIndex }) {
//     console.log(
//       ` order recieved! ${this.starterMenu[starterIndex]} and ${[
//         this.mainMenu[mainIndex],
//       ]} will be delivered to ${addres} at ${time}`
//     );
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// // const arr = [2, 4, 5, 6];
// // // console.log(arr[0]);
// // // console.log(arr[1]);
// // // console.log(arr[2]);
// // // console.log(arr[3]);
// // // console.log(arr[4]);// will give undefined

// // //using destructuring
// // const [a, b, c, d, e] = arr;
// // // console.log(a, b, c, d, e);

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // /// if we have to switch variables
// // // let temp = main;
// // // main = secondary;
// // // secondary = main;

// // // console.log(main, secondary);

// // //now using destructuring

// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);
// // const [staterFood, mainFood] = restaurant.order(1, 2);
// // console.log(staterFood, mainFood);

// // /// nested array

// // const arr1 = [9, 4, 3, [2, 5, 7]];

// // // const [u, , w, r] = arr1;
// // // console.log(u, w, r);// thsi givr the whole nested array
// // // so we need to  do nested destructuring also
// // // const [u, , w, [r, t, , h]] = arr1;
// // // console.log(u, w, r, t, h); // here h is kundefined

// // // default values
// // const [u = 1, , w = 1, [r = 1, t = 1, , h = 1]] = arr1;
// // console.log(u, w, r, t, h); /// here h will print its default value i.e 1

// /////////////////////////////////////////

// //destructuring objects

// const data = {
//   fname: 'faizan',
//   rollNo: 30,
//   class: '6th',
//   address: 'jamia',
//   phoneNo: 999999,
//   time: {
//     mon: '9am to 12pm',
//     fri: '9am to 1.30am',
//   },
// };

// // const { fname, rollNo, address, phoneNo } = data;

// // console.log(fname, rollNo, address, phoneNo);

// // nested objects

// // const { fname: firstName, time } = data;
// // console.log(firstName, time); /// here we specified the default name for fname and also we have a nested object

// const { mon: monval, fri: frival } = data.time;
// console.log(monval);

// restaurant.orderDelevery({
//   time: '01:00pm',
//   addres: restaurant.location,
//   mainIndex: 2,
//   starterIndex: 1,
// });

// console.log('' || 0);

// // const arr2 = [4, 5, 6];
// // const arrFind = arr2.find((item, index) => {
// //   console.log(index);
// //   item === 5;
// // });
// // if (!arrFind) console.log('not found');
// // if (arrFind) console.log('found');

//using maps

// const rest = new Map();
// rest.set('name', 'faizan').set('rollNo', 1);
// console.log(rest.get('rollNo'));

///strings
const fname = 'jOnAS'; //Jonas
const lower = fname.toLowerCase();
console.log(lower);
const final = lower[0].toUpperCase() + lower.slice(1);
console.log(final);
