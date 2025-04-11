const toggleBtn = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');
  
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });