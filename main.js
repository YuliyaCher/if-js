const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  }
];
const data2 = [
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  }
];

const hotelsList = document.querySelector('.gallery');
data.forEach(el => {
  const li = document.createElement('li');
  li.classList.add('gallery__item');
  li.innerHTML = `
  <img src=${el.imageUrl} alt='photo'/>
  <h3><a href=#>${el.name}</a></h3>
  <p>${el.country} , ${el.city}</p>
  `;
  hotelsList.append(li);
});

const hotelsList2 = document.querySelector('.gallery');
data2.forEach(el => {
  const li = document.createElement('li');
  li.classList.add('gallery__item');
  li.innerHTML = `
  <img src=${el.imageUrl} alt='photo'/>
  <h3><a href=#>${el.name}</a></h3>
  <p>${el.country} , ${el.city}</p>
  `;
  hotelsList2.append(li);
});

// вариант 2 (что был до этого)////////////////////

// const hotelsList = document.querySelector('.gallery');

// const createHotelsList = arr => {
//   arr.forEach(el => {
//     const li = document.createElement('li');
//     li.classList.add('gallery__item');
//     li.innerHTML = `
//     <img src=${el.imageUrl} alt='photo'/>
//     <h3><a href=#>${el.name}</a></h3>
//     <p>${el.city}, ${el.country}</p>
//     `;
//       hotelsList.append(li);
//   });
// };
// createHotelsList(data);
