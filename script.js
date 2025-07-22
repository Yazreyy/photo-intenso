// Récupère les éléments
const burger = document.getElementById('menu-burger');
const menuMobile = document.getElementById('nav-smartphone');
const boutonFermer = document.getElementById('bouton-fermer');

// Ouvre le menu au clic sur burger
burger.addEventListener('click', () => {
  menuMobile.classList.add('ouvert');
  menuMobile.setAttribute('aria-hidden', 'false');
});

// Ferme le menu au clic sur la croix
boutonFermer.addEventListener('click', () => {
  menuMobile.classList.remove('ouvert');
  menuMobile.setAttribute('aria-hidden', 'true');
});

// Optionnel : ferme aussi le menu si on appuie sur la touche Echap (Escape)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuMobile.classList.contains('ouvert')) {
    menuMobile.classList.remove('ouvert');
    menuMobile.setAttribute('aria-hidden', 'true');
  }
});


