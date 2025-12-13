// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
  // Copyright avec date dynamique
  const copyrightElement = document.getElementById('copyright');
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `© ${currentYear} - Pour Kapands ❤️ | Design: MylittleponyOh | Dev: Gawiène | Avec la participation des Pêches`;
  }

  // Gestion des interactions mobile
  if (window.innerWidth <= 700) {
    const notes = document.querySelector('.intro-notes');
    const phone = document.querySelector('#phone-container');

    if (notes && phone) {
      notes.addEventListener('click', () => {
        notes.style.zIndex = 12;
        phone.style.zIndex = 8;
      });

      phone.addEventListener('click', () => {
        phone.style.zIndex = 12;
        notes.style.zIndex = 8;
      });
    }
  }
});

