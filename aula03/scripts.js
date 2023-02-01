var moviesList = document.querySelector("#movies-list");

var startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", () => {
 let movieListImgs = Array();
  var movieImg = ""
  movieImg = prompt('Coloque a aqui o link de imagem válida:');
  movieListImgs.push(movieImg);

for (let i = 0; i < movieListImgs.length; i++) {
  moviesList.innerHTML += `<img src=${movieListImgs[i]}>`;
};
});
