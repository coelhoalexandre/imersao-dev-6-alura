var startBtn = document.querySelector("#start-btn");

startBtn.addEventListener("click", () => {
  var attemptsNumber = prompt("Digite a sua quantidade de tentativas abaixo. O padrão é 1 tentativa!");
  
  if (isNaN(parseInt(attemptsNumber)) && attemptsNumber != null) {

    alert("Digite um número válido.")
    
  } else if (attemptsNumber != null) {
    attemptsNumber.replace(",", ".")
    attemptsNumber = parseInt(attemptsNumber);
    var confirmation = prompt(`Está é a sua quantidade de tentativas: ${attemptsNumber}. Clique em cancela se quiser mudar.`)
    if (confirmation != null) {
      var randomNumber = parseInt(Math.random() * 1000) + 1;
      var attempts = 0;
      do {
        var attemptPlayer = prompt("Tente um número de 1 a 1000");
        if (attemptPlayer == randomNumber) {
          alert(
            `Parabéns, você acertou! O número sorteado era ${attemptPlayer}!`
          );
        } else if (attemptPlayer == null) {
          break;
        } else if (attemptPlayer === "" || attemptPlayer <= 0) {
          alert(
            `Só são aceitos números superiores a 0. Você perdeu uma tentativa!`
          );
        } else if (attemptPlayer > randomNumber) {
          alert(
            `Você errou... O número sorteado é menor que o número ${attemptPlayer}`
          );
        } else if (attemptPlayer < randomNumber) {
          alert(
            `Você errou... O número sorteado é maior que o número ${attemptPlayer}`
          );
        }
        attempts += 1;

        if(attempts == attemptsNumber || attempts == "") {
          alert("Que pena! Suas tentativas acabaram. Tente de novo apertando 'Iniciar'.");
        }

      } while ((attempts < attemptsNumber) && (attemptPlayer != randomNumber));
    }
  }


});


  

