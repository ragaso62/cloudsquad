const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const closeBtn = document.getElementById('closeBtn');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const imgSrc = card.querySelector('img').src;
    const title = card.querySelector('.info h2').innerText;
    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector('.info h2').innerText.toLowerCase();
    const match = title.includes(searchTerm);
    card.style.display = match ? 'block' : 'none';
  });
});

const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach((btn, index) => {
  const countSpan = btn.querySelector('.like-count');
  const storedLikes = localStorage.getItem(`like-${index}`);

  if (storedLikes) {
    countSpan.innerText = storedLikes;
  }

  btn.addEventListener('click', () => {
    let count = parseInt(countSpan.innerText);
    count++;
    countSpan.innerText = count;
    localStorage.setItem(`like-${index}`, count);
    btn.classList.add('liked');
    setTimeout(() => btn.classList.remove('liked'), 300);
  });
});

const form = document.getElementById('projectForm');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('projectName').value;
  const img = document.getElementById('projectImg').value;

  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${img}" alt="${name}">
    <div class="info">
      <h2>${name}</h2>
      <button class="like-btn">❤️ <span class="like-count">0</span></button>
    </div>
  `;

  gallery.prepend(card);

  // reativa funcionalidade do botão de curtir
  const btn = card.querySelector('.like-btn');
  btn.addEventListener('click', () => {
    const countSpan = btn.querySelector('.like-count');
    let count = parseInt(countSpan.innerText);
    count++;
    countSpan.innerText = count;
    btn.classList.add('liked');
    setTimeout(() => btn.classList.remove('liked'), 300);
  });

  form.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleTheme');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });
  });
