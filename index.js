const title = document.querySelector("h6");
const advice = document.querySelector("p");

function getAdvice() {
  fetch(`https://api.adviceslip.com/advice`)
    .then((res) => res.json())
    .then((object) => {
      console.log(object);
      title.innerHTML = "ADVICE #" + object.slip.id;
      advice.innerHTML = '“'+object.slip.advice+'”';

    })
    .catch((err) => {
      console.log(err);
    });
}

getAdvice();
