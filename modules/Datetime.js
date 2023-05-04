import luxon from './luxon.js';

const Date = document.getElementById('currdate');
const Time = () => {
  Date.innerHTML = luxon.DateTime.now().toLocaleString(
    luxon.DateTime.DATETIME_FULL_WITH_SECONDS,
  );
};

export default Time();