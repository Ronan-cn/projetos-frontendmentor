const buttons = document.querySelectorAll("ul li button");
const ratingCard = document.querySelector("#rating-card");
const thankyouCard = document.querySelector("#thank-you-card");
const submitButton = document.querySelector("#submit");
const ratingUser = document.querySelector("#rating-user");
let rating = 0;

submitButton.addEventListener("click", () => {
  ratingCard.style.display = "none";
  thankyouCard.style.display = "flex";
  ratingUser.innerText = rating;
});

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("active");
      }
    });

    button.classList.add("active");

    rating = index + 1;
  });
});
