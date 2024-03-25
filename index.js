//API Elements
// const API_url = 'http://www.omdbapi.com/?i=tt3896198&apikey=a0d03957';
// const apikey = 'a0d03957'

// //imports
// import { fetchPoster } from "./modules/mod1";
// console.log(fetchPoster);


const randomMovie = document.getElementById('random-movie');
const saveMovie = document.getElementById('save')

async function fetchMovie() {
    try {
        const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=a0d03957'); // Replace with your API endpoint
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        // Process the data as needed (e.g., update UI, display results)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


document.getElementById('random-movie').addEventListener('click', fetchMovie);