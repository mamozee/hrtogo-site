// mobile nav
var mb = document.getElementById('menuBtn'), nl = document.getElementById('navlinks');
if (mb && nl) {
  mb.addEventListener('click', function () { nl.classList.toggle('open'); });
  nl.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { nl.classList.remove('open'); });
  });
}
// sticky header state — solid when scrolled OR when there is no dark hero (subpages)
var hdr = document.getElementById('hdr');
function updHdr() {
  if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 10 || !document.querySelector('.hero'));
}
window.addEventListener('scroll', updHdr);
updHdr();
// reveal on scroll
var io = new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(function (el, i) {
  el.style.transitionDelay = (i % 6 * 40) + 'ms';
  io.observe(el);
});
// accordion (usluge page)
document.querySelectorAll('[data-acc-head]').forEach(function (h) {
  h.addEventListener('click', function () {
    var item = h.closest('[data-acc]');
    if (!item) return;
    var open = item.classList.toggle('open');
    h.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
// open the accordion targeted by the URL hash (deep link from homepage cards)
function openHashAcc() {
  if (!location.hash) return;
  var t;
  try { t = document.querySelector(location.hash); } catch (e) { return; }
  if (t && t.getAttribute && t.getAttribute('data-acc') !== null) {
    t.classList.add('open');
    var head = t.querySelector('[data-acc-head]');
    if (head) head.setAttribute('aria-expanded', 'true');
    setTimeout(function () { t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 80);
  }
}
openHashAcc();
window.addEventListener('hashchange', openHashAcc);
