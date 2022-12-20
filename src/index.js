// your code here
const db = 'http://localhost:3000/cakes';

function renderNav() {
  fetch(db)
    .then((res) => res.json())
    .then((cakes) => {
      console.log(cakes);
      const cakeNav = document.getElementById('cake-list');
      cakes.forEach((cake) => {
        const listItem = document.createElement('li');
        listItem.textContent = cake.name;
        cakeNav.appendChild(listItem);
      });
    });
}

function fetchCake(cake) {
  fetch(`${db}/${cake}`)
    .then((res) => res.json())
    .then((cake) => renderCakeInfo(cake));
}

//render cake info
function renderCakeInfo(cake) {
  console.log(cake);
  const cakeName = document.getElementById('cake-name');
  const cakeImg = document.getElementById('cake-image');
  const cakeDesc = document.getElementById('cake-description');
  const cakeReviews = document.getElementById('review-list');

  cakeName.textContent = cake.name;
  cakeImg.src = cake.image_url;
  cakeImg.alt = cake.name;
  cakeDesc.textContent = cake.description;

  clearReviews(cakeReviews);

  cake.reviews.forEach((review) => {
    const reviewItem = document.createElement('li');
    reviewItem.textContent = review;
    cakeReviews.appendChild(reviewItem);
  });
}

function clearReviews(reviews) {
  while (reviews.lastElementChild) {
    reviews.remove(lastElementChild);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  fetchCake(1); //Render first cake
});
