(() => {
  const data = window.PRIMATE_DATA;
  const svg = document.querySelector('#primate-tree');
  const stage = document.querySelector('#tree-stage');
  if (!data || !svg || !stage) return;

  const NS = 'http://www.w3.org/2000/svg';
  const collapsed = new Set(['strepsirrhini', 'platyrrhini', 'cercopithecoidea', 'hominins']);
  const parentMap = new Map();
  const nodeMap = new Map();
  let scale = 1;
  let translateX = 90;
  let translateY = 65;
  let dragging = false;
  let dragOrigin = null;
  let searchTerm = '';

  const indexTree = (node, parent = null) => {
    nodeMap.set(node.id, node);
    if (parent) parentMap.set(node.id, parent.id);
    (node.children || []).forEach(child => indexTree(child, node));
  };
  indexTree(data.tree);

  const createSvg = (name, attrs = {}) => {
    const el = document.createElementNS(NS, name);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    return el;
  };

  const isMatch = node => !searchTerm || `${node.name} ${node.latin || ''}`.toLowerCase().includes(searchTerm);

  const visibleLayout = () => {
    let row = 0;
    const positions = new Map();
    const layout = (node, depth) => {
      const children = collapsed.has(node.id) ? [] : (node.children || []);
      let y;
      if (!children.length) {
        y = row * 92;
        row += 1;
      } else {
        const ys = children.map(child => layout(child, depth + 1));
        y = (ys[0] + ys[ys.length - 1]) / 2;
      }
      positions.set(node.id, { x: depth * 255, y, node, children });
      return y;
    };
    layout(data.tree, 0);
    return { positions, height: Math.max(row * 92, 650) };
  };

  const groupClass = group => `tree-group-${group || 'early'}`;

  const render = () => {
    stage.replaceChildren();
    const { positions, height } = visibleLayout();
    svg.setAttribute('viewBox', `0 0 1750 ${Math.max(height + 160, 860)}`);

    positions.forEach(({ x, y, node, children }) => {
      children.forEach(child => {
        const target = positions.get(child.id);
        const path = createSvg('path', {
          d: `M ${x + 16} ${y + 70} C ${x + 108} ${y + 70}, ${target.x - 92} ${target.y + 70}, ${target.x - 16} ${target.y + 70}`,
          class: `phylo-link ${groupClass(child.group)}`
        });
        stage.appendChild(path);
      });
    });

    positions.forEach(({ x, y, node }) => {
      const g = createSvg('g', { class: `phylo-node ${groupClass(node.group)}${isMatch(node) ? ' search-match' : ''}`, transform: `translate(${x} ${y + 70})`, tabindex: '0', role: 'button' });
      g.dataset.id = node.id;
      g.setAttribute('aria-label', `${node.name}, ${node.age || ''}`);

      const hasChildren = Boolean(node.children?.length);
      const circle = createSvg('circle', { r: hasChildren ? 14 : 11, class: 'node-circle' });
      const pulse = createSvg('circle', { r: 22, class: 'node-pulse' });
      g.append(pulse, circle);

      if (hasChildren) {
        const icon = createSvg('text', { x: 0, y: 5, 'text-anchor': 'middle', class: 'node-toggle-symbol' });
        icon.textContent = collapsed.has(node.id) ? '+' : '−';
        g.appendChild(icon);
      }

      const labelBox = createSvg('rect', { x: 25, y: -29, width: 205, height: 59, rx: 12, class: 'node-label-box' });
      const name = createSvg('text', { x: 40, y: -5, class: 'node-name' });
      name.textContent = node.name;
      const age = createSvg('text', { x: 40, y: 16, class: 'node-age' });
      age.textContent = node.age || '';
      g.append(labelBox, name, age);

      const activate = () => {
        if (hasChildren) {
          if (collapsed.has(node.id)) collapsed.delete(node.id); else collapsed.add(node.id);
          render();
        } else if (node.speciesId) {
          window.location.href = `species.html?id=${node.speciesId}`;
        }
      };
      g.addEventListener('click', event => { event.stopPropagation(); activate(); });
      g.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); } });
      stage.appendChild(g);
    });

    applyTransform();
  };

  const applyTransform = () => {
    stage.setAttribute('transform', `translate(${translateX} ${translateY}) scale(${scale})`);
    document.querySelector('#zoom-level').textContent = `${Math.round(scale * 100)}%`;
  };

  const zoomAt = (factor, clientX = null, clientY = null) => {
    const oldScale = scale;
    scale = Math.max(.45, Math.min(2.2, scale * factor));
    if (clientX !== null && clientY !== null) {
      const rect = svg.getBoundingClientRect();
      const x = (clientX - rect.left) * (svg.viewBox.baseVal.width / rect.width);
      const y = (clientY - rect.top) * (svg.viewBox.baseVal.height / rect.height);
      translateX = x - (x - translateX) * (scale / oldScale);
      translateY = y - (y - translateY) * (scale / oldScale);
    }
    applyTransform();
  };

  svg.addEventListener('wheel', event => {
    event.preventDefault();
    zoomAt(event.deltaY < 0 ? 1.1 : .9, event.clientX, event.clientY);
  }, { passive: false });

  svg.addEventListener('pointerdown', event => {
    if (event.target.closest('.phylo-node')) return;
    dragging = true;
    dragOrigin = { x: event.clientX, y: event.clientY, tx: translateX, ty: translateY };
    svg.setPointerCapture(event.pointerId);
    svg.classList.add('dragging');
  });
  svg.addEventListener('pointermove', event => {
    if (!dragging) return;
    const rect = svg.getBoundingClientRect();
    const sx = svg.viewBox.baseVal.width / rect.width;
    const sy = svg.viewBox.baseVal.height / rect.height;
    translateX = dragOrigin.tx + (event.clientX - dragOrigin.x) * sx;
    translateY = dragOrigin.ty + (event.clientY - dragOrigin.y) * sy;
    applyTransform();
  });
  const stopDrag = event => {
    dragging = false;
    svg.classList.remove('dragging');
    if (event?.pointerId !== undefined && svg.hasPointerCapture(event.pointerId)) svg.releasePointerCapture(event.pointerId);
  };
  svg.addEventListener('pointerup', stopDrag);
  svg.addEventListener('pointercancel', stopDrag);

  document.querySelector('#zoom-in')?.addEventListener('click', () => zoomAt(1.15));
  document.querySelector('#zoom-out')?.addEventListener('click', () => zoomAt(.87));
  document.querySelector('#reset-view')?.addEventListener('click', () => { scale = 1; translateX = 90; translateY = 65; applyTransform(); });
  document.querySelector('#expand-all')?.addEventListener('click', () => { collapsed.clear(); render(); });
  document.querySelector('#collapse-all')?.addEventListener('click', () => {
    collapsed.clear(); ['plesiadapiforms', 'strepsirrhini', 'haplorhini', 'hominoidea', 'hominidae', 'hominins'].forEach(id => collapsed.add(id));
    render();
  });

  const openAncestors = id => {
    let current = id;
    while (parentMap.has(current)) {
      const parent = parentMap.get(current);
      collapsed.delete(parent);
      current = parent;
    }
  };

  const searchInput = document.querySelector('#tree-search');
  const searchStatus = document.querySelector('#tree-search-status');
  searchInput?.addEventListener('input', () => {
    searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
      const matches = [...nodeMap.values()].filter(node => `${node.name} ${node.latin || ''}`.toLowerCase().includes(searchTerm));
      matches.forEach(node => openAncestors(node.id));
      searchStatus.textContent = matches.length ? `${matches.length} matching branch${matches.length === 1 ? '' : 'es'} highlighted.` : 'No matching branch found.';
    } else {
      searchStatus.textContent = 'Search by common or scientific name.';
    }
    render();
  });

  render();
})();
