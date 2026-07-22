(() => {
  const data = window.PRIMATE_DATA;
  const stream = document.querySelector('#timeline-stream');
  if (!data || !stream) return;

  let group = 'all';
  let query = '';
  let maxAge = 66;
  const eraNames = { paleocene: 'Paleocene', eocene: 'Eocene', oligocene: 'Oligocene', miocene: 'Miocene', pliocene: 'Pliocene', quaternary: 'Quaternary' };

  const render = () => {
    const events = data.timeline.filter(event => {
      const groupMatch = group === 'all' || event.group === group;
      const ageMatch = event.age <= maxAge;
      const searchMatch = !query || `${event.title} ${event.taxon} ${event.text} ${eraNames[event.era]}`.toLowerCase().includes(query);
      return groupMatch && ageMatch && searchMatch;
    });

    if (!events.length) {
      stream.innerHTML = `<div class="empty-state timeline-empty"><span>⌛</span><h2>No events match</h2><p>Broaden the age range or clear a filter.</p></div>`;
      return;
    }

    let currentEra = '';
    stream.innerHTML = events.map((event, index) => {
      const eraHeader = event.era !== currentEra ? `<div class="timeline-era-heading" id="era-${event.era}"><span>${eraNames[event.era]}</span><i></i></div>` : '';
      currentEra = event.era;
      return `${eraHeader}
        <article class="timeline-event group-${event.group}" style="--delay:${Math.min(index, 12) * 35}ms">
          <div class="event-marker"><span></span></div>
          <div class="event-date">${event.display}</div>
          <div class="event-card">
            <p class="event-group">${data.groupLabels[event.group]}</p>
            <h2>${event.title}</h2>
            <p class="event-taxon"><em>${event.taxon}</em></p>
            <p>${event.text}</p>
          </div>
        </article>`;
    }).join('');
  };

  document.querySelectorAll('#timeline-filters button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('#timeline-filters button').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      group = button.dataset.filter;
      render();
    });
  });

  document.querySelector('#timeline-search')?.addEventListener('input', event => { query = event.target.value.trim().toLowerCase(); render(); });
  document.querySelector('#age-range')?.addEventListener('input', event => {
    maxAge = Number(event.target.value);
    document.querySelector('#age-range-value').textContent = maxAge;
    render();
  });

  document.querySelectorAll('.era-index button').forEach(button => {
    button.addEventListener('click', () => document.querySelector(`#era-${button.dataset.era}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  });

  const requestedEra = new URLSearchParams(window.location.search).get('era');
  render();
  if (requestedEra) setTimeout(() => document.querySelector(`#era-${requestedEra}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 250);
})();
