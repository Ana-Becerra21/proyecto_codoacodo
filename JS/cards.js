const cards = document.querySelectorAll('.card');
const links = ['link1.html', 'link2.html', 'link3.html', 'link4.html', 'link5.html', 'link6.html', 'link7.html', 'link8.html', 'link9.html', 'link10.html', 'link11.html', 'link12.html'];

cards.forEach((card, index) => {
  const link = document.createElement('a');
  link.href = links[index];
  link.target = '_blank';
  card.appendChild(link);
});
