(() => {
  const data = window.PRIMATE_DATA;
  const grid = document.querySelector('#species-grid');
  const dialog = document.querySelector('#species-dialog');
  if (!data || !grid || !dialog) return;

  let query = '';
  let group = 'all';
  let era = 'all';

  const silhouette = groupName => {
    const shapes = {
      early: '<span class="silhouette early-sil"><i></i><b></b></span>',
      strepsirrhine: '<span class="silhouette strepsirrhine-sil"><i></i><b></b></span>',
      haplorhine: '<span class="silhouette haplorhine-sil"><i></i><b></b></span>',
      anthropoid: '<span class="silhouette anthropoid-sil"><i></i><b></b></span>',
      ape: '<span class="silhouette ape-sil"><i></i><b></b></span>',
      hominin: '<span class="silhouette hominin-sil"><i></i><b></b></span>'
    };
    return shapes[groupName] || shapes.early;
  };

  const filteredTaxa = () => data.taxa.filter(taxon => {
    const haystack = `${taxon.common} ${taxon.scientific} ${taxon.region} ${taxon.summary} ${taxon.significance} ${taxon.traits.join(' ')} ${taxon.era}`.toLowerCase();
    return (group === 'all' || taxon.group === group) && (era === 'all' || taxon.era === era) && (!query || haystack.includes(query));
  });

  const render = () => {
    const taxa = filteredTaxa();
    document.querySelector('#species-count').textContent = taxa.length;
    document.querySelector('#species-empty').hidden = taxa.length > 0;
    grid.hidden = taxa.length === 0;
    grid.innerHTML = taxa.map(taxon => `
      <button class="species-card group-${taxon.group}" type="button" data-id="${taxon.id}" aria-label="Open profile for ${taxon.common}">
        <div class="species-card-art">${silhouette(taxon.group)}<span class="species-era-tag">${taxon.era === 'living' ? 'Living' : taxon.age}</span></div>
        <div class="species-card-copy">
          <p>${data.groupLabels[taxon.group]}</p>
          <h2>${taxon.common}</h2>
          <em>${taxon.scientific}</em>
          <span class="species-place">${taxon.region}</span>
          <span class="species-open">View profile <i>↗</i></span>
        </div>
      </button>`).join('');

    grid.querySelectorAll('.species-card').forEach(card => card.addEventListener('click', () => openTaxon(card.dataset.id)));
  };

  const openTaxon = id => {
    const taxon = data.taxa.find(item => item.id === id);
    if (!taxon) return;
    const content = document.querySelector('#species-dialog-content');
    content.innerHTML = `
      <div class="dialog-hero group-${taxon.group}">
        <div class="dialog-art">${silhouette(taxon.group)}</div>
        <div class="dialog-heading">
          <p>${data.groupLabels[taxon.group]} · ${taxon.status}</p>
          <h2 id="dialog-title">${taxon.common}</h2>
          <em>${taxon.scientific}</em>
          <div class="dialog-meta"><span><small>Age</small>${taxon.age}</span><span><small>Region</small>${taxon.region}</span><span><small>Confidence</small>${taxon.certainty}</span></div>
        </div>
      </div>
      <div class="dialog-body">
        <div class="dialog-main">
          <p class="dialog-lede">${taxon.summary}</p>
          <h3>Why it matters</h3><p>${taxon.significance}</p>
          <div class="ancestor-note"><strong>Not a ladder:</strong> ${taxon.notAncestor}</div>
        </div>
        <aside class="dialog-aside">
          <h3>Key features</h3><ul>${taxon.traits.map(trait => `<li>${trait}</li>`).join('')}</ul>
          <dl><div><dt>Habitat</dt><dd>${taxon.habitat}</dd></div><div><dt>Diet</dt><dd>${taxon.diet}</dd></div></dl>
          <a href="tree.html">Locate the broader branch <span>→</span></a>
        </aside>
      </div>`;
    if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
    const url = new URL(window.location.href);
    url.searchParams.set('id', id);
    history.replaceState({}, '', url);
  };

  const closeDialog = () => {
    dialog.close?.();
    dialog.removeAttribute('open');
    const url = new URL(window.location.href);
    url.searchParams.delete('id');
    history.replaceState({}, '', url.pathname + url.search);
  };
  dialog.querySelector('.dialog-close').addEventListener('click', closeDialog);
  dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
  dialog.addEventListener('close', () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('id');
    history.replaceState({}, '', url.pathname + url.search);
  });

  document.querySelector('#species-search').addEventListener('input', event => { query = event.target.value.trim().toLowerCase(); render(); });
  document.querySelector('#species-group').addEventListener('change', event => { group = event.target.value; render(); });
  document.querySelector('#species-era').addEventListener('change', event => { era = event.target.value; render(); });
  document.querySelector('#clear-species-filters').addEventListener('click', () => {
    query = ''; group = 'all'; era = 'all';
    document.querySelector('#species-search').value = '';
    document.querySelector('#species-group').value = 'all';
    document.querySelector('#species-era').value = 'all';
    render();
  });

  render();
  const requestedId = new URLSearchParams(window.location.search).get('id');
  if (requestedId) openTaxon(requestedId);
})();
