// JavaScript to remove blur on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  
  // If the user scrolls past a certain point, remove the blur
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
