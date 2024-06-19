let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "#00ff00";
let container = document.querySelector(".container");
let cards = document.querySelectorAll(".card");
for (let I = 0; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.dataset.nth = i + 1;
  eachCard.addEventListener("click", function (evt) {
    container.dataset.selected = evt.currenTarget.dataset.nth;
  });
}
