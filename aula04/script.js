var addMovieBtn = document.querySelector('#add-movie-btn');

var arrayListMovies = [];

addMovieBtn.addEventListener('click', () => {
  var movieAddressInput = document.querySelector('#img-movie-input').value;
  var movieNameInput = document.querySelector('#name-movie-input').value;
  var listMovies = document.querySelector('#list-movies');
  
  arrayListMovies.push(`<div class="container-movie"><span class="remove-movie-btn">X</span> <br> <img src="${movieAddressInput}" alt="${movieNameInput}"> <br> <span>${movieNameInput}</span></div>`) 

  document.querySelector('#img-movie-input').value = ''
  document.querySelector('#name-movie-input').value = ''

  listMovies.innerHTML += arrayListMovies[arrayListMovies.length - 1]

  let removeBtns = document.querySelectorAll('.remove-movie-btn');
  
  for (let i = 0; i < removeBtns.length; i++) {

    removeBtns[i].addEventListener('click', function() {
        removeMovie(i);
        
    });
  }
});

function removeMovie(index) {

    var containersMovies = document.querySelectorAll('.container-movie');

    containersMovies[index].remove();


}
// removeMovieBtn.addEventListener('click', () => {
//   var removeMovieBtn = document.querySelectorAll('#remove-movie-btn');
// });