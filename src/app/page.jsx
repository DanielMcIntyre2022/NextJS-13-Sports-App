
// import Results from "./components/Results";

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': process.env.API_HOST
  }
};

export default async function Home() {

  await fetch(`https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  
  return (
   <div>
      
   </div>
  )
}
