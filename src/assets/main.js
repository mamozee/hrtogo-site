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
