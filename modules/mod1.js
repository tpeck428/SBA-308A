//Poster Images

// const posterUrl = "http://img.omdbapi.com/?apikey=a0d03957&"
// const apikey = 'a0d03957'

export async function fetchPoster() {
    try {
        const response = await fetch('http://img.omdbapi.com/?apikey=a0d03957&'); // Replace with your API endpoint
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


document.getElementById('save').addEventListener('click', fetchDataFromAPI);