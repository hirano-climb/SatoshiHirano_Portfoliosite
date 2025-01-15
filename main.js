const menubutton = document.querySelector(".menubutton");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav a");
menubutton.addEventListener('click', () => {
    menubutton.classList.toggle('open');
    nav.classList.toggle('open');
});
links.forEach(link => {
    link.addEventListener('click', () => {
        menubutton.classList.remove('open');
        nav.classList.remove('open');
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
      });
  });
});


const pageTopBtn = document.querySelector(".page-top");
pageTopBtn.addEventListener("click", ()=> {
    window.scrollTo({
        top: 0, 
        behavior: "smooth" 
    });
});


const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
function updatePosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
function moveToNext() {
    currentIndex = (currentIndex + 1) % items.length;
    updatePosition();
}
function moveToPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updatePosition();
}

const nextButton = document.querySelector('.button.next');
const prevButton = document.querySelector('.button.prev');
let autoScrollInterval;
function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(moveToNext, 3000);
}
nextButton.addEventListener('click', () => {
    moveToNext();
    resetAutoScroll();
});
prevButton.addEventListener('click', () => {
    moveToPrev();
    resetAutoScroll();
});

autoScrollInterval = setInterval(moveToNext, 3000);
