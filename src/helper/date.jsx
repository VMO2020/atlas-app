const today = new Date(); // "July 21, 1999 01:15:00"
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const hour = today.getHours();

let weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

let weekDay = weekday[today.getDay()];

export { weekDay, day, month, year, hour };
export default today;
