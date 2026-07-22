(() => {
  const body = document.body;
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = body.classList.toggle('nav-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      body.classList.remove('nav-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const currentPage = body.dataset.page;
  document.querySelector(`[data-nav="${currentPage}"]`)?.setAttribute('aria-current', 'page');

  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' }) : null;

  document.querySelectorAll('.reveal').forEach(el => {
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add('visible');
  });

  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length) {
    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.counter);
        const start = performance.now();
        const duration = 1100;
        const tick = now => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    }, { threshold: .6 });
    counters.forEach(el => counterObserver.observe(el));
  }

  const featuredGrid = document.querySelector('#featured-taxa');
  if (featuredGrid && window.PRIMATE_DATA) {
    const featured = window.PRIMATE_DATA.taxa.filter(t => t.featured).slice(0, 6);
    featuredGrid.innerHTML = featured.map((taxon, index) => `
      <a class="taxa-preview-card reveal group-${taxon.group}" href="species.html?id=${taxon.id}">
        <div class="taxa-mini-art" aria-hidden="true"><span>${String(index + 1).padStart(2, '0')}</span><i></i></div>
        <div class="taxa-preview-copy">
          <span class="taxa-meta">${taxon.age} · ${taxon.region}</span>
          <h3>${taxon.common}</h3>
          <em>${taxon.scientific}</em>
          <p>${taxon.summary}</p>
        </div>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </a>`).join('');
    featuredGrid.querySelectorAll('.reveal').forEach(el => {
      if (revealObserver) revealObserver.observe(el); else el.classList.add('visible');
    });
  }
})();
