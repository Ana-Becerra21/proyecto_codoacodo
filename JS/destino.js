const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const image = card.querySelector('.card-image');
  const detail = card.querySelector('.card-detail');

  image.addEventListener('click', () => {
    card.classList.add('show-detail');
  });

  detail.querySelector('.close-btn').addEventListener('click', () => {
    card.classList.remove('show-detail');
  });
});
