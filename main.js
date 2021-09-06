// Преобразование формата даты из '2020-11-26' в '26.11.2020'
let date = '2020-11-26';

function newStyleDate(date) {
    let d = new Date(date)

    day = '' + d.getDate();
    month = '' + (d.getMonth() + 1);
    year = '' + d.getFullYear();

    if (day.length < 2)
        day = '0' + day;
    if (month.length < 2)
        month = '0' + month;

    return [day, month, year].join('.');
}
console.log(newStyleDate(date));



// Поиск объектов размещения
const data = [{
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];

const SearchString = (str) => {
    for (let i = 0; i < data.length; i++) {
        if ((data[i].country === str) || (data[i].city === str) || (data[i].hotel === str)) {
            return `country: ${data[i].country}, city: ${data[i].city}, hotel: ${data[i].hotel}`;
        }
    }
}
console.log(SearchString('Russia'));