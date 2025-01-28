document.addEventListener('DOMContentLoaded', () => {
    const circleReveal = document.querySelector('.circle-reveal');
    circleReveal.addEventListener('click', () => {
        circleReveal.style.animation = 'none';
        circleReveal.offsetHeight;
        circleReveal.style.animation = 'scaleIn 1.5s ease-out forwards';
        
        const innerCircle = document.querySelector('.inner-circle');
        innerCircle.style.animation = 'none';
        innerCircle.style.opacity = '0';
        innerCircle.offsetHeight;
        innerCircle.style.animation = 'innerReveal 0.8s ease-out forwards';
        innerCircle.style.animationDelay = '2s';
    });

    gsap.to('.lore-text', {
        opacity: 1,
        duration: 2,
        delay: 2
    });
    
    //nav
    const container = document.querySelector('.nav-container');
    const items = document.querySelectorAll('.nav-item');
    const toggleButton = document.querySelector('.toggle-button');
    const toggleText = document.querySelector('.toggle-text');
    const toggleIcon = document.querySelector('.toggle-icon');

    // Toggle collapse/expand
    toggleButton.addEventListener('click', () => {
        container.classList.toggle('collapsed');
        if (container.classList.contains('collapsed')) {
            toggleText.textContent = 'Show More';
            toggleIcon.innerHTML = '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>';
        } else {
            toggleText.textContent = 'Show Less';
            toggleIcon.innerHTML = '<line x1="5" y1="12" x2="19" y2="12"></line>';
        }
    });

    // 3D tilt effect
    container.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        container.style.transform = `
            rotateX(${y * -10}deg)
            rotateY(${x * 10}deg)
            translateZ(10px)
        `;
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = `
            rotateX(0deg)
            rotateY(0deg)
            translateZ(0px)
        `;
    });

    // Individual item hover effect
    items.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = item.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;

            item.style.transform = `
                translateZ(30px)
                rotateX(${y * 20}deg)
                rotateY(${x * 20}deg)
            `;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateZ(0px) rotateX(0deg) rotateY(0deg)';
        });
    });

    // Individual item hover effect
    items.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = item.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;

            item.style.transform = `
                translateZ(30px)
                rotateX(${y * 20}deg)
                rotateY(${x * 20}deg)
            `;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateZ(0px) rotateX(0deg) rotateY(0deg)';
        });
    });
});

function splitTextIntoSpans(selector) {
    const elements = document.querySelectorAll(selector);
  
    elements.forEach((element) => {
      const text = element.innerText;
      element.innerHTML = "";
  
      text.split("").forEach((char) => {
        if (char === " ") {
          element.innerHTML += "&nbsp;";
        } else {
          const span = document.createElement("span");
          span.innerText = char;
  
          const div = document.createElement("div");
          div.className = "letter";
          div.appendChild(span);
  
          element.appendChild(div);
        }
      });
    });
  }
  
  splitTextIntoSpans("h1");
  
  document.querySelectorAll("h1").forEach((h1) => {
    const spans = h1.querySelectorAll(".letter span");
  
    gsap.to(spans, {
      x: 0,
      duration: 1,
      ease: "power4.out",
      delay: (index) => Math.random() * 0.5 + 0.25,
      scrollTrigger: {
        trigger: h1,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });