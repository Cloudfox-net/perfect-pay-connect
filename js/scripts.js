document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// splide
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    type: 'fade',
    perPage: 1,
    arrows: boolean = true,
    pagination: boolean = true,
    paginationKeyboard: boolean = true,
    autoplay: boolean = false,
    interval: number = 10000,
    pauseOnHover: boolean = true,
    rewind: boolean = true,
  });
  splide.mount();
});

