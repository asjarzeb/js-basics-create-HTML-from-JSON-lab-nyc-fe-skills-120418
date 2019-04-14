// document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here


// 1. Find out which button was pressed
// 2. Get the data for that movie
// 3. Replace the template values with the real ones


function onMovieChange (movie) {
  let data = movies[movie]
    // Replace template values
  let title = data.title // "Titanic"
  let titleDiv = document.getElementById('title')
  titleDiv.innerHTML = title
  
  let directorDiv = document.getElementById('director')
  directorDiv.innerHTML = data.director
  
   let genreDiv = document.getElementById('genre')
  genreDiv.innerHTML = data.genre
  
   let filmRatingDiv = document.getElementById('filmRating')
  filmRatingDiv.innerHTML = data.filmRating
  
  let posterImg = document.getElementById('poster')
  posterImg.src = data.poster
  
   let audienceScoreDiv = document.getElementById('audienceScore')
  audienceScoreDiv.innerHTML = data.audienceScore
  
  let descriptionDiv = document.getElementById('description')
  descriptionDiv.innerHTML = data.description
  
  let castDiv = document.getElementById('cast')
  
  let startingString = ''
  for (let castMember of data.cast) {
   startingString += '<li>' + castMember.role + ': ' + 
      castMember.actor + '</li>'
      
  castDiv.innerHTML = startingString
  
  //
  
  const reviewsDiv = document.getElementById('reviews')
  
  startingString = ''
  for (let reviews of data.reviews) {
   startingString += '<li>' + reviews.username + ': ' + 
      reviews.content + '</li>'
      
  reviewsDiv.innerHTML = startingString
  
  // <li>Role: Name of actor</li>
}
}
}


titanicButton.addEventListener('click', () => onMovieChange('Titanic'))

 

onMovieChange('Titanic')

// });