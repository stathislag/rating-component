//Select  Ratings 1-5
const rating = document.querySelectorAll(".rating");

let selectedRating; //undifined

function selectRating(e) {
  if (selectedRating !== undefined) {
    rating[selectedRating - 1].classList.remove("active");
  }

  e.target.classList.add("active");
  selectedRating = Number(e.target.innerText);
}

rating.forEach(function (elem) {
  elem.addEventListener("click", selectRating);
});

//Submit Button to next state
const submitBtn = document.querySelector(".submit");

function submitRating() {
  if (selectRating !== undefined) {
    document.getElementById("initial-view").classList.add("dsp_none");
    document.getElementById("final-view").classList.remove("dsp_none");
    document.getElementById("selected-rating").innerText = selectedRating;
  }
}

submitBtn.addEventListener("click", submitRating);
