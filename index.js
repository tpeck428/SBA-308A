//API Elements
// const API_url = 'http://www.omdbapi.com/?i=tt3896198&apikey=a0d03957';
// const apikey = 'a0d03957'

// //imports
// import { fetchPoster } from "./modules/mod1";
// console.log(fetchPoster);


const randomMovie = document.getElementById('random-movie');
// const saveMovie = document.getElementById('save')

async function fetchMovie() {
    try {
        const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=a0d03957'); 
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        console.log('Your movie:', data);

    } catch (error) {
        console.error('Movie Not Found:', error);
    }
}


document.getElementById('random-movie').addEventListener('click', fetchMovie);

//attempted secondary code to get secon button working does not display information as list

// async function saveMovie(){
//     try{
//         const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=a0d03957'); 
//         if (!response.ok) {
//             throw new Error(`Error fetching data: ${response.status}`);
//         }
//         const data = await response.json(); //
//         console.log('Your movie:', data);

        
//         // display the movie title and year
//         const movieTitle = data.Title;
//         const movieYear = data.Year;

//         // create a list item 
//         const save = document.createElement('li');
//         save.textContent = `${movieTitle} (${movieYear})`;

//         // Append the list item to the movie list
//         const movieList = document.getElementById('movieList');
//         // movieList.appendChild(save);

//     } catch (error) {
//         console.error('Movie Not saved:', error);
//     }
// }
// document.getElementById('save').addEventListener('click', saveMovie); 
