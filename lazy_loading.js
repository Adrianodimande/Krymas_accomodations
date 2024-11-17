function lazy() {
    const imgs = window.document.querySelectorAll('[data-src]');
    imgs.forEach((Element) => {
      if (Element.getBoundingClientRect().top < window.innerHeight) {
        Element.src = Element.getAttribute('data-src');
        Element.removeAttribute('data-src');
      }
    })
  }

  window.onload = () => {
    lazy();
  }
  window.onscroll = () => {
    lazy();
  }
