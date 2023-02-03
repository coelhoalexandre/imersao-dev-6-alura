var playerList = []
function createPlayerListObject(playerNameList) {
  playerList = []
  for (let i = 0; i < playerNameList.length; i++) {
    playerList.push(
      {
        nome: `${playerNameList[i]}`,
        victories: 0,
        ties: 0,
        defeats: 0,
        points: 0
      });
  }
  displayOnScreen(playerList)
}

var addPlayerButton = document.querySelector('#add-player-button');
var playerNameList = []

addPlayerButton.addEventListener('click', () => {
  // alert(playerNameList)
  var playerName = document.querySelector('#player-name').value;
  if (playerName != null && playerName != undefined && playerName != '') {
  playerNameList.push(playerName)
  document.querySelector('#player-name').value = ''
  createPlayerListObject(playerNameList);
  }
  // alert(playerNameList)
});
  
var tableElement = document.querySelector("#tabelaJogadores");

function displayOnScreen(playerList) {
  tableElement.innerHTML = ''
  for (let i = 0; i < playerList.length; i++) {
    tableElement.innerHTML += `
    <tr>
      <td>${playerList[i].nome}</td>
      <td id="victories${i}">${playerList[i].victories}</td>
      <td id="ties${i}">${playerList[i].ties}</td>
      <td id="defeats${i}">${playerList[i].defeats}</td>
      <td id="points${i}">${playerList[i].points}</td>
      <td><button class="victory-button">Vitória</button></td>
      <td><button class="tie-button">Empate</button></td>
      <td><button class="defeat-button">Derrota</button></td>
    </tr>
    `;
  }  

  var victoriesBtn = document.querySelectorAll(".victory-button");
  var tiesBtn = document.querySelectorAll(".tie-button");
  var defeatsBtn = document.querySelectorAll(".defeat-button");

  function addVictory(i) {
    playerList[i].victories++;
    playerList[i].points += 3;
    let tdVictories = document.querySelector(`#victories${i}`)
    tdVictories.innerHTML = playerList[i].victories
    let tdPoints = document.querySelector(`#points${i}`)
    tdPoints.innerHTML = playerList[i].points
  }
  
  function addTie(i) {
    playerList[i].ties++;
    playerList[i].points++;
    let tdTies = document.querySelector(`#ties${i}`)
    tdTies.innerHTML = playerList[i].ties
    let tdPoints = document.querySelector(`#points${i}`)
    tdPoints.innerHTML = playerList[i].points
  }
  
  function addDefeat(i) {
    playerList[i].defeats++;
    // playerList[i].points -= 1;
    let tdDefeats = document.querySelector(`#defeats${i}`)
    tdDefeats.innerHTML = playerList[i].defeats
    // let tdPoints = document.querySelector(`#points${i}`)
    // tdPoints.innerHTML = playerList[i].points
  }
  
  for (let i = 0; i < victoriesBtn.length; i++) {
    victoriesBtn[i].addEventListener("click", () => {
      addVictory(i);
    });
  }
  
  for (let i = 0; i < tiesBtn.length; i++) {
    tiesBtn[i].addEventListener("click", () => {
      addTie(i);
    });
  }
  
  for (let i = 0; i < defeatsBtn.length; i++) {
    defeatsBtn[i].addEventListener("click", () => {
      addDefeat(i);
    });
  }
  
}

var deleteList = document.querySelector('#reset-button');

deleteList.addEventListener("click", () => {
  tableElement.innerHTML = ''
  playerList = [];
  playerNameList = [];
});

var resetBtn = document.querySelector('#reset-points-button');

resetBtn.addEventListener("click", () => {

  for (let i = 0; i < playerList.length; i++) {
    playerList[i].victories = 0;
    playerList[i].ties = 0;
    playerList[i].defeats = 0;
    playerList[i].points = 0;
  }  
  console.log(playerList);
  displayOnScreen(playerList)

});



