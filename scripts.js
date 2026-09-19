(function () {
  function load(id, url) {
    return fetch(url)
      .then(function (r) {
        if (!r.ok) { throw new Error('Failed to load ' + url); }
        return r.text();
      })
      .then(function (html) {
        document.getElementById(id).innerHTML = html;
      });
  }

  function initTheme() {
    var saved = localStorage.getItem('soi-theme');
    if (saved === 'light') {
      document.body.classList.add('light');
    }
    var buttons = document.querySelectorAll('.theme-toggle button');
    function apply(theme) {
      document.body.classList.toggle('light', theme === 'light');
      localStorage.setItem('soi-theme', theme);
      buttons.forEach(function (b) {
        b.classList.toggle('active', b.dataset.theme === theme);
      });
    }
    buttons.forEach(function (b) {
      b.addEventListener('click', function () { apply(b.dataset.theme); });
    });
    var initial = document.body.classList.contains('light') ? 'light' : 'dark';
    buttons.forEach(function (b) {
      b.classList.toggle('active', b.dataset.theme === initial);
    });
  }

  Promise.all([
    load('nav', 'nav.html'),
    load('footer', 'footer.html')
  ]).then(initTheme).catch(function (err) {
    console.error(err);
  });
})();