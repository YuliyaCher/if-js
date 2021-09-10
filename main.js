// 1 . создайте функцию palindrome, которая будет возвращать bool
// значение в зависимости от того, является ли переданное функции слово палиндромом или нет;
// запишите реализацию этого метода в одну строку
function Palindrom(str) {
  if (str === str.split('').reverse('').join('')) {
    return true;
  }
  return false;
}
console.log(Palindrom('12321'));

// 2. напишите функцию поиска, которая будет принимать строку;
// по полученной строке найдите все совпадения в массиве по любому из полей;
const hotels = [{
  name: 'Hotel Leopold',
  city: 'Saint Petersburg',
  country: 'Russia',
},
{
  name: 'Apartment Sunshine',
  city: 'Santa Cruz de Tenerife',
  country: 'Spain',
},
{
  name: 'Villa Kunerad',
  city: 'Vysokie Tatry',
  country: 'Slowakia',
},
{
  name: 'Hostel Friendship',
  city: 'Berlin',
  country: 'Germany',
},
{
  name: 'Radisson Blu Hotel',
  city: 'Kyiv',
  country: 'Ukraine',
},
{
  name: 'Paradise Hotel',
  city: 'Guadalupe',
  country: 'Mexico',
},
{
  name: 'Hotel Grindewald',
  city: 'Interlaken',
  country: 'Switzerland',
},
{
  name: 'The Andaman Resort',
  city: 'Port Dickson',
  country: 'Malaysia',
},
{
  name: 'Virgin Hotel',
  city: 'Chicago',
  country: 'USA',
},
{
  name: 'Grand Beach Resort',
  city: 'Dubai',
  country: 'United Arab Emirates',
},
{
  name: 'Shilla Stay',
  city: 'Seoul',
  country: 'South Korea',
},
{
  name: 'San Firenze Suites',
  city: 'Florence',
  country: 'Italy',
},
{
  name: 'The Andaman Resort',
  city: 'Port Dickson',
  country: 'Malaysia',
},
{
  name: 'Black Penny Villas',
  city: 'BTDC, Nuca Dua',
  country: 'Indonesia',
},
{
  name: 'Koko Hotel',
  city: 'Tokyo',
  country: 'Japan',
},
{
  name: 'Ramada Plaza',
  city: 'Istanbul',
  country: 'Turkey',
},
{
  name: 'Waikiki Resort Hotel',
  city: 'Hawaii',
  country: 'USA',
},
{
  name: 'Puro Hotel',
  city: 'Krakow',
  country: 'Poland',
},
{
  name: 'Asma Suites',
  city: 'Santorini',
  country: 'Greece',
},
{
  name: 'Cityden Apartments',
  city: 'Amsterdam',
  country: 'Netherlands',
},
{
  name: 'Mandarin Oriental',
  city: 'Miami',
  country: 'USA',
},
{
  name: 'Concept Terrace Hotel',
  city: 'Rome',
  country: 'Italy',
},
{
  name: 'Ponta Mar Hotel',
  city: 'Fortaleza',
  country: 'Brazil',
},
{
  name: 'Four Seasons Hotel',
  city: 'Sydney',
  country: 'Australia',
},
{
  name: 'Le Meridien',
  city: 'Nice',
  country: 'France',
},
{
  name: 'Apart Neptun',
  city: 'Gdansk',
  country: 'Poland',
},
{
  name: 'Lux Isla',
  city: 'Ibiza',
  country: 'Spain',
},
{
  name: 'Nox Hostel',
  city: 'London',
  country: 'UK',
},
{
  name: 'Leonardo Vienna',
  city: 'Vienna',
  country: 'Austria',
},
{
  name: 'Adagio Aparthotel',
  city: 'Edinburgh',
  country: 'UK',
},
{
  name: 'Steigenberger Hotel',
  city: 'Hamburg',
  country: 'Germany',
},
];
function Searchstr(str) {
  let arr2 = [];
  hotels.forEach((item) => {
    let str2 = `отель: ${item.name}, город: ${item.city}, страна: ${item.country}`;
    if (str2.includes(str)) {
      arr2.push(str2);
    }
  });
  return arr2;
}
console.log(Searchstr('UK'));

// Сопоставте страны с городами из массива
// {
//   Australia: ['Sydney'],
//   Germany: ['Berlin', 'Hamburg'],
//   Italy: ['Florence', 'Rome'],
//   USA: ['Chicago', 'Hawaii', 'Miami'],
//   Ukraine: ['Kyiv']
// }

function searchCountry(str) {
  let countryAndCities = [];
  hotels.forEach((item) => {
    let str3 = `${item.country}: ['${item.city}']`;
    if (str3.includes(str)) {
      countryAndCities.push(str3);
    }
  });
  return countryAndCities;
}
console.log(searchCountry('Germany'));
// я много раз тыкалась, но так и не поняла,  как вывести всё сразу в консоль. и я сдалась.
