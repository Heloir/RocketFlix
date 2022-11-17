import {
  IMG_URL,
} from './api.js'


const movieContainer = document.querySelector('.movie-info')
const moviePoster = document.querySelector('.movie-poster')
const movieTitle = document.querySelector('.movie-title')
const movieDescription = document.querySelector('.movie-description')
const getRandomMovieButton = document.querySelector('.find-movie')



getRandomMovieButton.addEventListener('click', async () =>{
    const RandomId = Math.floor(Math.random() * 500)
    const movie = await getMovie(RandomId)
    renderMovie(movie)
})


async function getMovie(RandomId){
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${RandomId}?api_key=a8711a413d9e2d4c13f6d58a262f5aa1`)
    const movieData = await movie.json()
    return movieData
}

function renderMovie(movieData){

  movieContainer.style.display = 'flex'

  moviePoster.src = `${IMG_URL}${movieData.poster_path}`
  movieTitle.textContent = movieData.title
  movieDescription.textContent = movieData.overview
}
