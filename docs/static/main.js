document.addEventListener('DOMContentLoaded', () => {
  // Iterate over Zola syntax highlighte code blocks and create 'Preview' and 'Code' tabs.
  document.querySelectorAll('pre[data-lang]').forEach(pre => {

    // Insert the buttons menu before the code block.
    const menu = document.createElement('menu');
    menu.className = 'actions buttons';
    pre.prepend(menu);

    // 'Copy' button.
    {
      const b = document.createElement('button');
      b.className = 'ghost small';
      b.textContent = 'Copy';
      b.setAttribute('aria-label', 'Copy code to clipboard');
      b.addEventListener('click', () => {
        navigator.clipboard.writeText(pre.querySelector('code').textContent.trim()).then(() => {
          b.textContent = 'Copied';
          setTimeout(() => b.textContent = 'Copy', 2000);
        });
      });
      menu.appendChild(b);
    }

    // Demo code block or just a normal code block?
    const demo = pre.closest('.ot-demo');
    if (!demo) {
      return;
    }

    pre.style.display = 'block';
    const code = pre.querySelector('code');
    const rawHTML = code.textContent;

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

    const panel = demo.querySelector(':scope > ot-tabs > [role="tabpanel"]:last-child');
    panel.appendChild(pre);


    // Make the code block editable and update the preview on change.
    const content = demo.querySelector('.demo-content');
    const el = code || pre;
    const highlighted = el.innerHTML;
    el.setAttribute('contenteditable', 'plaintext-only');
    el.setAttribute('spellcheck', 'false');
    el.addEventListener('input', () => content.innerHTML = el.textContent);

    // 'Reset' button.
    {
      const b = document.createElement('button');
      b.className = 'ghost small btn-reset';
      b.textContent = 'Reset';
      b.setAttribute('aria-label', 'Reset code to original');
      b.addEventListener('click', () => {
        el.innerHTML = highlighted;
        content.innerHTML = rawHTML;
      });
      menu.prepend(b);
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
