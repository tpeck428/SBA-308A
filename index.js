// console.log('are we connected?')
fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a0d03957")

    //testing code
//     .then(response => response.json())
//     .then(data => {
//         const breedList = document.getElementById('breed-list');
//         data.forEach(breed => {
//             const breedItem = document.createElement('li');
//             breedItem.textContent = breed.name;
//             breedList.appendChild(breedItem);
//         });
//     })
//     .catch(error => {
//         console.error(error);
//     });
// const galleryContainer = document.getElementById('gallery-container');
// fetch(' https://api.thecatapi.com/v1/images/search?limit=10', {
//     headers: {
//         'x-api-key': 'live_OwhhhHYXMP56Fmf24uUzlKb1Zl5XrO3926cS4Mr2Ngcno632lTMw1v2iiG9YcsUF'
//     }
// })
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(cat => {
//             const catImage = document.createElement('img');
//             catImage.src = cat.url;
//             galleryContainer.appendChild(catImage);
//         });
//     })
//     .catch(error => {
//         console.error(error);
//     });