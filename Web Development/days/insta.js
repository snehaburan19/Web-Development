    const mainImage = document.getElementById('mainImage');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    mainImage.addEventListener('click', () => {
      popup.style.display = 'block';
      overlay.style.display = 'block';

      // Hide after 3 seconds
      setTimeout(() => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
      }, 3000);
    });