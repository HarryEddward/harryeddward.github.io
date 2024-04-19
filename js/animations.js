document.addEventListener("DOMContentLoaded", function () {
    const btnAnimate = document.getElementById('btnAnimate');
  
    const navAnimate = document.getElementById("navAnimate");



    gsap.from("#navAnimate", { opacity: 0, y: -150, duration: 1, ease: 'elastic.out(0.2, 1)', delay: 0.5 })
    gsap.to("#quote", { y: 0 })
    gsap.from("#quote", { opacity: 0, y: 150, duration: 1, ease: 'power2.inOut' })
    gsap.to('#navburger', {
        opacity: 0,
        x: 120,
        duration: 1,
        ease: "sine.out", 
    });

    gsap.fromTo('#title', {
        opacity: 0,
        y: -150,
    }, {
        opacity: 1,
        y: 10,
        duration: 3
    });
    gsap.to("#boxMedium", {
        duration: 1,
        rotation: 360,
        opacity: 1, 
        delay: 0.5, 
        stagger: 0.2,
        ease: "sine.out", 
        force3D: true
      });
    gsap.to("#boxSmall", {
        duration: 1,
        rotation: 360,
        opacity: 1, 
        delay: 0.5, 
        stagger: 0.2,
        ease: "power2.inOut", 
        force3D: true
      });

    btnAnimate.addEventListener('click', function () {
      // Animation using GSAP
      gsap.from('.display-4', { opacity: 0, y: 150, duration: 1, ease: 'power2.inOut' });
      gsap.from('.lead', { opacity: 0, y: 50, duration: 3, ease: 'power2.inOut', delay: 0.5 });
      gsap.from('.btn-lg', { opacity: 0, scale: 0.5, duration: 1, ease: 'elastic.out(1, 0.3)', delay: 1 });
    });
  });
  