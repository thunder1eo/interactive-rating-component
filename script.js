'use strict';

const ratings_container = document.querySelector('.container-ratings');
const submit = document.querySelector('.container__submit');
const ratings = document.querySelectorAll('.rating');
const rating_summary = document.querySelector('.rating-summary');
const container_ratings = document.querySelector('.container');
const container_feedback = document.querySelector('.container-2');

let rate_count = 0;

// using event delegation
ratings_container.addEventListener('click', e => {
  //   console.log(e.target);

  // matching strategy
  if (e.target.classList.contains('rating')) {
    // check and remove active class
    ratings.forEach(rating => {
      rating.classList.remove('active');
    });

    // add active class to target and update rate_count
    e.target.classList.add('active');

    rate_count = e.target.textContent;

    rating_summary.textContent = `You selected ${rate_count} out of ${ratings.length}`;
  }
});

// submit
submit.addEventListener('click', () => {
  // check ratings
  if (!rate_count) {
    rating_summary.textContent = `You selected ${rate_count} out of ${ratings.length} `;
  }

  // hide ratings container
  container_feedback.classList.remove('hidden');
  container_ratings.classList.add('hidden');
});
