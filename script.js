document.querySelectorAll('.acc-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.acc-item');
      const isOpen = item.classList.contains('open');

      // Fermer tous les items du même accordion
      const siblings = item.closest('.accordion').querySelectorAll('.acc-item');
      siblings.forEach(s => {
        s.classList.remove('open');
        s.querySelector('.acc-header').setAttribute('aria-expanded', 'false');
      });

      // Ouvrir le cliqué s'il était fermé
      if (!isOpen) {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });