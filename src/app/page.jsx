
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://api-nba-v1.p.rapidapi.com/standings',
  params: {league: 'standard', season: '2022'},
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': process.env.API_HOST
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export default function Home() {
  return (
   <div>

   </div>
  )
}
