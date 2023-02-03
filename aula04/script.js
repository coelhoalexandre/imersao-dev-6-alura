var addMovieBtn = document.querySelector('#add-movie-btn');

function removeMovie(event) {

  event.target.parentElement.remove();

}

addMovieBtn.addEventListener('click', () => {
  var movieAddressInput = document.querySelector('#img-movie-input').value;
  var movieNameInput = document.querySelector('#name-movie-input').value;
  var elementListMovies = document.querySelector('#list-movies');
  var item = document.createElement("div");
  item.classList.add("card-filme");
  var movieName = document.createElement("span");
  var img = document.createElement("img");
  var removeBtn = document.createElement("button");

  img.src = movieAddressInput;
  // img.addEventListener("click", removeMovie);
  movieName.innerHTML = movieNameInput;
  removeBtn.innerHTML = "Remover";
  removeBtn.addEventListener("click", removeMovie);

  item.appendChild(movieName);
  item.appendChild(img);
  item.appendChild(removeBtn);
  elementListMovies.appendChild(item);
  
  // document.querySelector('#img-movie-input').value = '';
  // document.querySelector('#name-movie-input').value = '';
});

