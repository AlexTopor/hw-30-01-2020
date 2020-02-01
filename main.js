const axios = require('axios');

Promise.all([
  axios.get('https://swapi.co/api/people/1'),
  axios.get('https://swapi.co/api/people/3'),
]).then((result) => {
  for (const i of result) {
    console.log(i.data.mass);
  }
})
  .catch((error) => {
    console.log(error);
  });
