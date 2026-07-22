(() => {
  const data = window.PRIMATE_DATA;
  const panel = document.querySelector('#adaptation-panel');
  if (!data || !panel) return;

  const art = type => {
    const drawings = {
      vision: `<div class="adapt-art vision-diagram" aria-hidden="true"><div class="eye eye-left"><i></i></div><div class="eye eye-right"><i></i></div><span class="vision-field field-left"></span><span class="vision-field field-right"></span><b>overlap</b></div>`,
      hands: `<div class="adapt-art hand-diagram" aria-hidden="true"><div class="palm"></div><span class="finger f1"></span><span class="finger f2"></span><span class="finger f3"></span><span class="finger f4"></span><span class="finger thumb"></span><i class="touch-ring"></i></div>`,
      locomotion: `<div class="adapt-art locomotion-diagram" aria-hidden="true"><span class="limb arm-a"></span><span class="limb arm-b"></span><span class="torso"></span><span class="limb leg-a"></span><span class="limb leg-b"></span><i class="ground-line"></i><b class="motion-arc"></b></div>`,
      teeth: `<div class="adapt-art teeth-diagram" aria-hidden="true"><div class="tooth incisor"></div><div class="tooth canine"></div><div class="tooth premolar"></div><div class="tooth molar"></div><span>incisor</span><span>canine</span><span>premolar</span><span>molar</span></div>`,
      brain: `<div class="adapt-art brain-diagram" aria-hidden="true"><div class="brain-shell"><span></span><span></span><span></span><span></span><span></span></div><i class="network n1"></i><i class="network n2"></i><i class="network n3"></i></div>`
    };
    return drawings[type];
  };

  const render = key => {
    const item = data.adaptations[key];
    panel.innerHTML = `
      <div class="adaptation-visual group-${key}">${art(item.art)}<p>Interactive concept illustration</p></div>
      <div class="adaptation-copy">
        <p class="adaptation-kicker">${item.kicker}</p>
        <h2>${item.title}</h2>
        <p class="adaptation-intro">${item.intro}</p>
        <div class="adaptation-points">${item.points.map(([title, text], index) => `<article><span>${String(index + 1).padStart(2, '0')}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join('')}</div>
        <div class="adaptation-evidence"><strong>Evidence used</strong><p>${item.evidence}</p></div>
      </div>`;
  };

  document.querySelectorAll('#adaptation-tabs button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('#adaptation-tabs button').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      render(button.dataset.tab);
    });
  });

  render('vision');
})();
