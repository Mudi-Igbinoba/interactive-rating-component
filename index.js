// declare a string that should hold the value of selected rating
let ratingValue = 0;

// function that clears the previously selected buttons
const clearSelectedRating = () => {
    rate.forEach((e) => {
        e.nextElementSibling.classList.remove('active');
    });
};

//grab dom elements:
const form = document.querySelector('form');
const rate = document.querySelectorAll('.rate');
const ratingCard = document.querySelector('#rating-sect');
const thanksCard = document.querySelector('#thanks-sect');
const selectedRatingText = document.querySelector('#selectedRating');

//add click event listener to submitBtn and rate-btn
rate.forEach((e) => {
    e.addEventListener('click', () => {
        //function that highlights only the selected button and saves its value in the aforementioned variable
        clearSelectedRating();

        if (e.checked) {
            e.nextElementSibling.classList.add('active');
            ratingValue = e.nextElementSibling.textContent;
        }
    });
});

form.addEventListener('submit', () => {
    // for submitBtn, create function that displays the thank-sect, hides the rating sect and updates the thanks sect with the rating value selected
    ratingCard.style.display = 'none';
    thanksCard.style.display = 'block';
    selectedRatingText.textContent = `You selected ${ratingValue} out of 5`;
});
