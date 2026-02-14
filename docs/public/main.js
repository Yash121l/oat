document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.ot-demo').forEach(demo => {
    const pre = demo.querySelector('pre');
    if (!pre) return;
    pre.style.display = 'block';

    const code = pre.querySelector('code');
    const rawHTML = code.textContent;

    // Create tabbed interface.
    demo.innerHTML = `
      <ot-tabs>
        <div role="tablist">
          <button role="tab">⧉ Preview</button>
          <button role="tab">{} Code</button>
        </div>
        <div role="tabpanel">
          <div class="demo-box"><div class="demo-content">${rawHTML}</div></div>
        </div>
        <div role="tabpanel"></div>
      </ot-tabs>
    `;

    // Move the original Zola syntax-highlighted <pre> into the Code tab.
    demo.querySelector(':scope > ot-tabs > [role="tabpanel"]:last-child').appendChild(pre);
  });

  // Add 'copy' and 'run' buttons to code blocks.
  document.querySelectorAll('pre[data-lang]').forEach(el => {
    const code = el.querySelector('code').textContent;

    // Cupy Button
    const btn = document.createElement('button');
    btn.className = 'copy-btn ghost small';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy code to clipboard');
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(code.trim()).then(() => {
        btn.textContent = 'Copied';
        setTimeout(() => btn.textContent = 'Copy', 2000);
      });
    });
    el.prepend(btn);

    // Playground Button (only for HTML)
    if (el.getAttribute('data-lang') === 'html') {
      const playBtn = document.createElement('a');
      playBtn.className = 'playground-btn button ghost small';
      playBtn.textContent = 'Run';
      playBtn.href = '/playground/?code=' + encodeURIComponent(code);
      playBtn.target = '_blank';
      playBtn.setAttribute('aria-label', 'Open in Playground');
      el.prepend(playBtn);
    }
  });
});


function toggleTheme() {
  var theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}
