/* Enhanced site script: sticky header, animations, counters, FAQ, contact form */
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const header = document.querySelector('.site-header');
const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');
const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
const sections = Array.from(document.querySelectorAll('main section[id], section[id]'));

/* Navigation toggle for small screens */
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => siteNav.classList.toggle('show'));
}

document.addEventListener('click', (event) => {
  if (!siteNav || !navToggle) return;
  const clickedInsideNav = siteNav.contains(event.target);
  const clickedToggle = navToggle.contains(event.target);
  if (siteNav.classList.contains('show') && !clickedInsideNav && !clickedToggle) {
    siteNav.classList.remove('show');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && siteNav) {
    siteNav.classList.remove('show');
  }
});

/* Smooth scroll for internal links */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav if open
        siteNav && siteNav.classList.remove('show');
      }
    }
  });
});

/* Sticky header shadow on scroll */
function onScrollHeader() {
  if (!header) return;
  if (window.scrollY > 20) header.classList.add('scrolled'); else header.classList.remove('scrolled');
}
window.addEventListener('scroll', onScrollHeader, { passive: true });
onScrollHeader();

/* Active nav link based on visible section */
function setActiveNavLink() {
  const scrollPos = window.scrollY + 120;
  sections.forEach(section => {
    const id = section.getAttribute('id');
    if (!id) return;
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const isInView = scrollPos >= top && scrollPos < bottom;
    if (isInView) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}
window.addEventListener('scroll', setActiveNavLink, { passive: true });
window.addEventListener('load', setActiveNavLink);
setActiveNavLink();

/* IntersectionObserver for fade-in animations */
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));

/* Animated counters */
function animateCounter(el){
  const target = +el.getAttribute('data-target') || 0;
  const duration = 1600;
  let start = 0;
  const step = Math.max(1, Math.floor(target / (duration / 16)));
  function tick(){
    start += step;
    if (start >= target) { el.textContent = target; return; }
    el.textContent = start;
    requestAnimationFrame(tick);
  }
  tick();
}

const counterObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.querySelectorAll('.value').forEach(v=> animateCounter(v));
      counterObserver.unobserve(entry.target);
    }
  });
},{threshold:0.3});
document.querySelectorAll('.counters').forEach(c=>counterObserver.observe(c));

/* Contact form handler (simulated) */
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    contactMessage.textContent = 'تم استلام رسالتك بنجاح. سنتواصل معك قريباً!';
    contactForm.reset();
  });
}

/* FAQ accordion functionality (accessible) */
document.addEventListener('DOMContentLoaded', () => {
  const faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      const item = btn.closest('.faq-item');
      if (!expanded) {
        item.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        item.classList.remove('open');
        panel.style.maxHeight = null;
      }
    });
  });
  // ensure any pre-expanded are opened
  document.querySelectorAll('.faq-question[aria-expanded="true"]').forEach(btn => {
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    const item = btn.closest('.faq-item');
    item.classList.add('open');
    panel.style.maxHeight = panel.scrollHeight + 'px';
  });
});
