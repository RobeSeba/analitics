const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animada');
        } else {
          entry.target.classList.remove('animada'); // Esto permite que la animación se reinicie cuando se vuelva a mostrar
        }
      });
    }, {
      threshold: 0.1 // Ajusta este valor si quieres que se active más pronto o más tarde
    });

    cards.forEach(card => observer.observe(card));