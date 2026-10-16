(function () {
  // Bar-chart axis ranges come from data-min / data-max.
  document.querySelectorAll('.bars').forEach(function (el) {
    el.style.setProperty('--min', el.dataset.min || 0);
    el.style.setProperty('--max', el.dataset.max || 100);
  });

  // Mobile nav toggle.
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Nav border on scroll + active section highlight.
  var nav = document.getElementById('nav');
  var navLinks = Array.prototype.slice.call(links.querySelectorAll('a'));
  var sections = navLinks.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 8);
    var y = window.scrollY + 120, idx = 0, best = -1;
    sections.forEach(function (s, i) {
      if (s && s.offsetTop <= y && s.offsetTop > best) { best = s.offsetTop; idx = i; }
    });
    navLinks.forEach(function (a, i) { a.classList.toggle('active', i === idx); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Copy BibTeX.
  document.querySelectorAll('.copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = document.getElementById(btn.dataset.target).innerText;
      function done() {
        btn.textContent = 'Copied!';
        btn.classList.add('done');
        setTimeout(function () { btn.textContent = 'Copy BibTeX'; btn.classList.remove('done'); }, 1800);
      }
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done, fallback);
      } else {
        fallback();
      }
      function fallback() {
        var ta = document.createElement('textarea');
        ta.value = text; ta.setAttribute('readonly', '');
        ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); done(); } catch (e) { btn.textContent = 'Press Ctrl+C'; }
        document.body.removeChild(ta);
      }
    });
  });
})();
