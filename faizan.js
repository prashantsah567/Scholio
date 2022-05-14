window.addEventListener('scroll', () =>{
document.querySelector('nav').classList.toggle
('whenScroll', window.scrollY > 12)
})