var quotation = document.querySelector("#quotation");
var realValue = document.querySelector("#real-value");
var res = document.querySelector("#currency-value");
var conversionBtn = document.querySelector("#conversion-button");
var clearBtn = document.querySelector("#clear-button");

conversionBtn.addEventListener("click", () => {
  if (realValue.value == "" || quotation.value == "") {
    res.innerHTML = `<strong>Preencha ambos campos!</strong>`;
  } else {
    var currencyValue = realValue.value / quotation.value;

    res.innerHTML = `Você teria nessa moeda o valor de: <strong>${currencyValue.toFixed(
      2
    )}</strong>`;
  }
});

clearBtn.addEventListener("click", () => {
  res.innerHTML = "<strong>A quantidade na moeda aparece aqui!</strong>";
  quotation.value = null;
  realValue.value = null;
});
