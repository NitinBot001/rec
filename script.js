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
var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

  setInterval(function() { plusSlides(1) }, 3000); // Auto transition every 3 seconds



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

document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Dark Mode 🌜';
    } else {
        this.textContent = '🌞 Light Mode';
    }
});


function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,hi,ta,te,kn,mr,bn,gu,ur,pa,ml,or,as,ne', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}

// Plain JavaScript approach
function adjustContainerSize() {
    var container = document.querySelector('pripcon');
    var contentHeight = container.scrollHeight;
    container.style.height = contentHeight + 'px';
}

// jQuery approach
$(document).ready(function() {
    function adjustContainerSize() {
        var container = $('pripcon');
        var contentHeight = container.prop('scrollHeight');
        container.css('height', contentHeight + 'px');
    }

    // Call adjustContainerSize on document load and whenever translation occurs
    adjustContainerSize();
});

