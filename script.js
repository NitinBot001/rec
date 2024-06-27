document.addEventListener('DOMContentLoaded', (event) => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
            closeAllDropdowns();
            this.querySelector('.dropdown-content').style.display = 'block';
        });
    });

    document.addEventListener('click', closeAllDropdowns);

    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        });
    }
});

/* script.js */
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500); // Change image every 2 seconds
}


document.addEventListener('DOMContentLoaded', (event) => {
    const popupButton = document.getElementById('popupButton');
    const popup = document.getElementById('popup');
    const close = document.querySelector('.close');

    popupButton.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});


