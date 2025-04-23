document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Progress bar animation
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('progressBar').style.width = scrolled + '%';
    });

    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Create parallax effect for hero background
    const heroParallax = document.getElementById('heroParallax');
    if (heroParallax) {
        gsap.to(heroParallax, {
            y: 100,
            scrollTrigger: {
                trigger: '.hero',
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }

    // Animate hero elements
    gsap.from('.hero__title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from('.hero__description', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });

    gsap.from('.hero .btn', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out"
    });

    // Floating animation for hero button
    gsap.to('.hero .btn', {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Animate each process step
    const steps = document.querySelectorAll('.process__step');
    
    steps.forEach((step, index) => {
        const content = step.querySelector('.step__content');
        const visual = step.querySelector('.step__visual');
        
        // Create animation for the content
        gsap.fromTo(content, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: step,
                    start: "top 70%",
                    toggleActions: "play none none none",
                    markers: false
                }
            }
        );
        
        // Create animation for the visual
        gsap.fromTo(visual, 
            { opacity: 0, scale: 0.9, y: 50 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: step,
                    start: "top 70%",
                    toggleActions: "play none none none",
                    markers: false
                }
            }
        );
        
        // Create specific animations for each step's visual
        createStepAnimation(step, index + 1);
    });
    
    // Create specific animations for each step
    function createStepAnimation(step, stepNumber) {
        const visual = step.querySelector('.step__visual > div');
        
        switch(stepNumber) {
            case 1: // Conversation animation
                createConversationAnimation(visual);
                break;
            case 2: // Blueprint animation
                createBlueprintAnimation(visual);
                break;
            case 3: // Design animation
                createDesignAnimation(visual);
                break;
            case 4: // Build animation
                createBuildAnimation(visual);
                break;
            case 5: // Testing animation
                createTestingAnimation(visual);
                break;
            case 6: // Launch animation
                createLaunchAnimation(visual);
                break;
            case 7: // Support animation
                createSupportAnimation(visual);
                break;
        }
    }
    
    function createConversationAnimation(container) {
        // Create speech bubbles for conversation animation
        const bubbleData = [
            { left: '20%', top: '30%', width: '120px', height: '80px', delay: 0, text: 'Tell us about your vision' },
            { left: '35%', top: '40%', width: '150px', height: '90px', delay: 0.3, text: 'Who is your audience?' },
            { left: '50%', top: '50%', width: '180px', height: '100px', delay: 0.6, text: 'What makes you unique?' },
            { left: '65%', top: '60%', width: '210px', height: '110px', delay: 0.9, text: 'Let\'s build something amazing' }
        ];
        
        bubbleData.forEach((bubble, index) => {
            const bubbleElement = document.createElement('div');
            bubbleElement.className = 'speech-bubble';
            bubbleElement.style.left = bubble.left;
            bubbleElement.style.top = bubble.top;
            bubbleElement.style.width = bubble.width;
            bubbleElement.style.height = bubble.height;
            bubbleElement.textContent = bubble.text;
            container.appendChild(bubbleElement);
            
            // Animate bubbles with GSAP
            gsap.fromTo(bubbleElement, 
                { scale: 0.5, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    delay: bubble.delay,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: container.parentElement.parentElement,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        // Add floating animation to bubbles
        bubbleData.forEach((bubble, index) => {
            const bubbleElement = container.children[index];
            gsap.to(bubbleElement, {
                y: 10,
                duration: 3 + index,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });
    }
    
    function createBlueprintAnimation(container) {
        // Create grid lines
        for (let i = 0; i < 10; i++) {
            const horizontal = document.createElement('div');
            horizontal.className = 'grid-line grid-line--horizontal';
            horizontal.style.top = `${i * 10}%`;
            container.appendChild(horizontal);
            
            const vertical = document.createElement('div');
            vertical.className = 'grid-line grid-line--vertical';
            vertical.style.left = `${i * 10}%`;
            container.appendChild(vertical);
        }
        
        // Create wireframe elements
        const elements = [
            { top: '15%', left: '20%', width: '60%', height: '15%', text: 'Header' },
            { top: '35%', left: '20%', width: '25%', height: '40%', text: 'Navigation' },
            { top: '35%', left: '50%', width: '30%', height: '15%', text: 'Hero' },
            { top: '55%', left: '50%', width: '30%', height: '15%', text: 'Content' },
            { top: '75%', left: '20%', width: '60%', height: '10%', text: 'Footer' }
        ];
        
        elements.forEach((el, index) => {
            const element = document.createElement('div');
            element.className = 'wireframe-element';
            element.style.top = el.top;
            element.style.left = el.left;
            element.style.width = el.width;
            element.style.height = el.height;
            element.textContent = el.text;
            container.appendChild(element);
            
            // Animate wireframe elements
            gsap.fromTo(element, 
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: container.parentElement.parentElement,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        // Add floating animation to grid lines
        gsap.to('.grid-line--horizontal', {
            x: 10,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to('.grid-line--vertical', {
            y: 10,
            duration: 7,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
    
    function createDesignAnimation(container) {
        // Create color swatches
        const colors = [
            { color: '#6e44ff', name: 'Primary Purple' },
            { color: '#4a25d4', name: 'Deep Indigo' },
            { color: '#00f0ff', name: 'Electric Teal' },
            { color: '#ff4d8d', name: 'Vibrant Pink' },
            { color: '#ffb800', name: 'Sunshine Yellow' }
        ];
        
        colors.forEach((colorData, index) => {
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch';
            swatch.style.backgroundColor = colorData.color;
            swatch.style.left = `${20 + (index * 15)}%`;
            swatch.style.top = '30%';
            
            // Add tooltip
            const tooltip = document.createElement('span');
            tooltip.className = 'color-tooltip';
            tooltip.textContent = colorData.name;
            swatch.appendChild(tooltip);
            
            container.appendChild(swatch);
            
            // Animate swatches
            gsap.fromTo(swatch, 
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: container.parentElement.parentElement,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // Add floating animation
            gsap.to(swatch, {
                y: 10,
                duration: 4 + index,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });
        
        // Create typography sample
        const typography = document.createElement('div');
        typography.className = 'typography-sample';
        typography.innerHTML = `
            <h3 class="typography-sample__heading">Aa</h3>
            <p class="typography-sample__text">Space Grotesk</p>
        `;
        typography.style.left = '30%';
        typography.style.top = '60%';
        container.appendChild(typography);
        
        // Animate typography
        gsap.fromTo(typography, 
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: container.parentElement.parentElement,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

        // Add floating animation
        gsap.to(typography, {
            y: 10,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
    
    function createBuildAnimation(container) {
        // Create code editor effect
        const codeEditor = document.createElement('div');
        codeEditor.className = 'code-editor';
        codeEditor.innerHTML = `
            <div class="code-editor__header">
                <div class="code-editor__dots">
                    <span class="code-editor__dot code-editor__dot--red"></span>
                    <span class="code-editor__dot code-editor__dot--yellow"></span>
                    <span class="code-editor__dot code-editor__dot--green"></span>
                </div>
                <div class="code-editor__title">index.html</div>
            </div>
            <div class="code-editor__content">
                <pre><code class="language-html"></code></pre>
            </div>
        `;
        container.appendChild(codeEditor);
        
        // Animate code editor
        gsap.fromTo(codeEditor, 
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: container.parentElement.parentElement,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

        // Sample code to type
        const code = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Website</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<header class="main-header">
<h1>Welcome to Your New Site</h1>
</header>

<main class="content">
<p>Your content goes here...</p>
</main>

<footer class="main-footer">
<p>&copy; 2023 Your Brand</p>
</footer>

<script src="script.js"></script>
</body>
</html>`;
        
        // Animate code typing
        const codeElement = codeEditor.querySelector('.language-html');
        let i = 0;
        
        // Only start animation when scrolled to
        ScrollTrigger.create({
            trigger: container.parentElement.parentElement,
            start: "top 80%",
            onEnter: () => {
                const timer = setInterval(() => {
                    if (i < code.length) {
                        codeElement.textContent = code.substring(0, i);
                        i++;
                        // Scroll code editor to bottom
                        codeEditor.scrollTop = codeEditor.scrollHeight;
                    } else {
                        clearInterval(timer);
                    }
                }, 10);
            }
        });
    }
    
    function createTestingAnimation(container) {
        // Create checklist
        const checklist = document.createElement('div');
        checklist.className = 'testing-checklist';
        checklist.innerHTML = `
            <h3 class="testing-checklist__title">Quality Assurance</h3>
            <ul class="testing-checklist__list">
                <li class="testing-checklist__item">Cross-browser Testing</li>
                <li class="testing-checklist__item">Mobile Responsiveness</li>
                <li class="testing-checklist__item">Performance Optimization</li>
                <li class="testing-checklist__item">Functionality Testing</li>
                <li class="testing-checklist__item">Content Review</li>
                <li class="testing-checklist__item">Security Checks</li>
            </ul>
        `;
        container.appendChild(checklist);
        
        // Animate checklist
        gsap.fromTo(checklist, 
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: container.parentElement.parentElement,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

        // Animate checklist items
        const items = checklist.querySelectorAll('.testing-checklist__item');
        
        items.forEach((item, index) => {
            const check = document.createElement('span');
            check.className = 'check';
            item.prepend(check);
            
            // Animate checks
            gsap.fromTo(check, 
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                    delay: index * 0.3,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: container.parentElement.parentElement,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    },
                    onComplete: () => {
                        check.innerHTML = '✓';
                        check.style.color = '#00d46a';
                    }
                }
            );
        });
    }
    
    function createLaunchAnimation(container) {
        // Create website frame
        const website = document.createElement('div');
        website.className = 'website-frame';
        website.innerHTML = `
            <div class="website-frame__header">
                <h2 class="website-frame__title">YourBrand</h2>
                <nav class="website-frame__nav">
                    <a href="#" class="website-frame__link">Home</a>
                    <a href="#" class="website-frame__link">About</a>
                    <a href="#" class="website-frame__link">Work</a>
                    <a href="#" class="website-frame__link">Contact</a>
                </nav>
            </div>
            <div class="website-frame__hero">
                <h1 class="website-frame__hero-title">Welcome to Your New Website</h1>
                <p class="website-frame__hero-text">We're live and ready for business</p>
                <button class="website-frame__button">Get Started</button>
            </div>
        `;
        container.appendChild(website);
        
        // Create confetti container
        const confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        container.appendChild(confettiContainer);
        
        // Animate website launch
        gsap.fromTo(website, 
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: container.parentElement.parentElement,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                onComplete: createConfetti
            }
        );
        
        // Create confetti effect
        function createConfetti() {
            const colors = ['#6e44ff', '#4a25d4', '#00f0ff', '#ff4d8d', '#ffb800', '#00d46a'];
            const confettiCount = window.innerWidth < 768 ? 50 : 100;
            
            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.top = `${Math.random() * -20}%`;
                confetti.style.width = `${Math.random() * 10 + 5}px`;
                confetti.style.height = `${Math.random() * 5 + 3}px`;
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                confetti.style.opacity = Math.random() * 0.7 + 0.3;
                
                confettiContainer.appendChild(confetti);
                
                // Animate confetti falling
                gsap.to(confetti, {
                    y: window.innerHeight,
                    duration: Math.random() * 3 + 2,
                    delay: Math.random() * 2,
                    ease: "power1.out",
                    onComplete: () => {
                        confetti.remove();
                    }
                });
            }
        }
    }
    
    function createSupportAnimation(container) {
        // Create support icons
        const icons = [
            { icon: '🛠️', label: 'Maintenance' },
            { icon: '⚡', label: 'Optimization' },
            { icon: '🔄', label: 'Updates' },
            { icon: '🔒', label: 'Security' },
            { icon: '📊', label: 'Analytics' }
        ];
        
        icons.forEach((iconData, index) => {
            const iconElement = document.createElement('div');
            iconElement.className = 'support-icon';
            iconElement.innerHTML = `
                <div class="support-icon__icon">${iconData.icon}</div>
                <div class="support-icon__label">${iconData.label}</div>
            `;
            iconElement.style.left = `${15 + (index * 17)}%`;
            iconElement.style.top = '40%';
            container.appendChild(iconElement);
            
            // Animate icons
            gsap.fromTo(iconElement, 
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: container.parentElement.parentElement,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // Add floating animation
            gsap.to(iconElement, {
                y: 10,
                duration: 4 + index,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without page reload
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    location.hash = targetId;
                }
            }
        });
    });

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                y: -3,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        // Add focus styles for accessibility
        button.addEventListener('focus', () => {
            button.style.boxShadow = '0 0 0 3px rgba(110, 68, 255, 0.4)';
        });
        button.addEventListener('blur', () => {
            button.style.boxShadow = 'var(--shadow-primary)';
        });
    });

    // Add parallax effect to elements with class 'parallax-element'
    document.querySelectorAll('.parallax-element').forEach(el => {
        gsap.to(el, {
            y: (i, target) => -20 * (i + 1),
            scrollTrigger: {
                trigger: el.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // Next step button functionality
    const nextStepButtons = document.querySelectorAll('.next-step-btn');
    
    // Add click event to each button
    nextStepButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the parent step section
            const currentStep = this.closest('.process__step');
            
            // Find the next sibling step section
            const nextStep = currentStep.nextElementSibling;
            
            if (nextStep && nextStep.classList.contains('process__step')) {
                // Scroll to the next step
                nextStep.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Set up final step button
    const finalStepBtn = document.getElementById('final-step-btn');
    if (finalStepBtn) {
        // You can add the link for the final button later
        // finalStepBtn.href = "your-link-here";
    }

    // Animate final CTA
    gsap.from('.cta__title', {
        y: 50,
        opacity: 0,
        scrollTrigger: {
            trigger: '.cta',
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });

    gsap.from('.cta__description', {
        y: 50,
        opacity: 0,
        delay: 0.2,
        scrollTrigger: {
            trigger: '.cta',
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });

    gsap.from('.cta .btn', {
        y: 50,
        opacity: 0,
        delay: 0.4,
        scrollTrigger: {
            trigger: '.cta',
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });
});

   // Mobile menu toggle
   const mobileMenuBtn = document.getElementById('mobileMenuBtn');
   const mobileNav = document.getElementById('mobileNav');
   
   mobileMenuBtn.addEventListener('click', function() {
       this.classList.toggle('active');
       mobileNav.classList.toggle('active');
   });
   
   // Close mobile menu when clicking a link
   document.querySelectorAll('.mobile-nav-item').forEach(item => {
       item.addEventListener('click', () => {
           mobileMenuBtn.classList.remove('active');
           mobileNav.classList.remove('active');
       });
   });
