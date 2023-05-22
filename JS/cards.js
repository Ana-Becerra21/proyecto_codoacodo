const cards = document.querySelectorAll('.card');
const links = ['link1.html', 'link2.html', 'link3.html']

cards.forEach((card, index) => {
  const link = document.createElement('a');
  link.href = links[index];
  link.target = '_blank';
  card.appendChild(link);
});
