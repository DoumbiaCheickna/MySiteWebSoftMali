/* ===================================
   SOFTMALI - JavaScript Principal
   ================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVIGATION =====
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const backToTop = document.getElementById('backToTop');
    
    // Mobile Menu Toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Back to top functionality
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===== SMOOTH SCROLLING =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== ANIMATED COUNTERS =====
    const statNumbers = document.querySelectorAll('.stat-number');
    let counted = false;
    
    function animateCounters() {
        if (counted) return;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            if (!target) return;
            
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target + (stat.textContent.includes('%') ? '%' : '+');
                }
            };
            
            updateCounter();
        });
        
        counted = true;
    }
    
    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
    
    // ===== CONTACT FORM =====
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validate required fields
            if (!data.name || !data.email || !data.phone || !data.projectType || !data.message) {
                alert('Veuillez remplir tous les champs obligatoires.');
                return;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Veuillez entrer une adresse email valide.');
                return;
            }
            
            try {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
                submitBtn.disabled = true;
                
                // Save to Firebase Firestore
                if (window.FirebaseService && window.FirebaseService.saveContactMessage) {
                    const result = await window.FirebaseService.saveContactMessage(data);
                    
                    if (result.success) {
                        console.log('✅ Message sauvegardé dans Firebase avec ID:', result.id);
                        
                        // Show success message
                        contactForm.style.display = 'none';
                        formSuccess.style.display = 'flex';
                        
                        // Reset form
                        contactForm.reset();
                    } else {
                        throw new Error(result.error || 'Erreur lors de la sauvegarde');
                    }
                } else {
                    // Fallback: simulate form submission if Firebase not configured
                    console.warn('⚠️ Firebase non configuré, simulation de l\'envoi...');
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    
                    // Show success message
                    contactForm.style.display = 'none';
                    formSuccess.style.display = 'flex';
                    
                    // Reset form
                    contactForm.reset();
                }
                
                // Restore button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 3000);
                
            } catch (error) {
                console.error('❌ Erreur lors de l\'envoi du formulaire:', error);
                alert('Une erreur est survenue. Veuillez réessayer.');
                
                // Restore button
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    // ===== PROJECT CALCULATOR =====
    const calculateBtn = document.getElementById('calculateBtn');
    const calcResult = document.getElementById('calcResult');
    
    if (calculateBtn) {
        const calcProjectType = document.getElementById('calcProjectType');
        const calcPages = document.getElementById('calcPages');
        const calcPagesValue = document.getElementById('calcPagesValue');
        const calcComplexity = document.getElementById('calcComplexity');
        const calcSEO = document.getElementById('calcSEO');
        const calcCMS = document.getElementById('calcCMS');
        const calcAPI = document.getElementById('calcAPI');
        const calcMultilang = document.getElementById('calcMultilang');
        
        // Update pages value display
        if (calcPages && calcPagesValue) {
            calcPages.addEventListener('input', function() {
                calcPagesValue.textContent = this.value;
            });
        }
        
        calculateBtn.addEventListener('click', function() {
            let basePrice = 0;
            let baseTime = 0;
            
            // Base price by project type
            const projectType = calcProjectType.value;
            switch(projectType) {
                case 'vitrine':
                    basePrice = 800;
                    baseTime = 2;
                    break;
                case 'ecommerce':
                    basePrice = 2500;
                    baseTime = 4;
                    break;
                case 'webapp':
                    basePrice = 4000;
                    baseTime = 8;
                    break;
                case 'mobile':
                    basePrice = 5000;
                    baseTime = 10;
                    break;
                case 'custom':
                    basePrice = 6000;
                    baseTime = 12;
                    break;
            }
            
            // Add price per page/feature
            const pages = parseInt(calcPages.value);
            basePrice += pages * 100;
            baseTime += Math.floor(pages / 5) * 0.5;
            
            // Complexity multiplier
            const complexity = calcComplexity.value;
            let complexityMultiplier = 1;
            switch(complexity) {
                case 'medium':
                    complexityMultiplier = 1.3;
                    break;
                case 'advanced':
                    complexityMultiplier = 1.6;
                    break;
            }
            
            basePrice *= complexityMultiplier;
            baseTime *= complexityMultiplier;
            
            // Additional features
            if (calcSEO && calcSEO.checked) {
                basePrice += 500;
                baseTime += 1;
            }
            if (calcCMS && calcCMS.checked) {
                basePrice += 800;
                baseTime += 1.5;
            }
            if (calcAPI && calcAPI.checked) {
                basePrice += 1000;
                baseTime += 2;
            }
            if (calcMultilang && calcMultilang.checked) {
                basePrice += 600;
                baseTime += 1;
            }
            
            // Display results
            const estimatedPrice = document.getElementById('estimatedPrice');
            const estimatedTime = document.getElementById('estimatedTime');
            
            if (estimatedPrice && estimatedTime) {
                // Animate price
                animateValue(estimatedPrice, 0, Math.round(basePrice), 1000, '€');
                
                // Animate time
                const weeks = Math.ceil(baseTime);
                animateValue(estimatedTime, 0, weeks, 1000, weeks === 1 ? ' semaine' : ' semaines');
                
                // Save quote request to Firebase
                if (window.FirebaseService && window.FirebaseService.saveQuoteRequest) {
                    const quoteData = {
                        projectType: calcProjectType.value,
                        pages: parseInt(calcPages.value),
                        complexity: calcComplexity.value,
                        features: {
                            seo: calcSEO ? calcSEO.checked : false,
                            cms: calcCMS ? calcCMS.checked : false,
                            api: calcAPI ? calcAPI.checked : false,
                            multilang: calcMultilang ? calcMultilang.checked : false
                        },
                        estimatedPrice: Math.round(basePrice),
                        estimatedTime: weeks,
                        userAgent: navigator.userAgent,
                        pageUrl: window.location.href
                    };
                    
                    window.FirebaseService.saveQuoteRequest(quoteData).then(result => {
                        if (result.success) {
                            console.log('✅ Devis sauvegardé avec ID:', result.id);
                        }
                    });
                }
            }
            
            // Show results
            calcResult.style.display = 'block';
            calcResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
    
    // Animate value function
    function animateValue(element, start, end, duration, suffix = '') {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                clearInterval(timer);
                element.textContent = Math.round(end) + suffix;
            } else {
                element.textContent = Math.round(current) + suffix;
            }
        }, 16);
    }
    
    // ===== ANIMATION ON SCROLL =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.expertise-card, .value-card, .service-detail, .team-member, .faq-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add fade-in class styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // ===== URL PARAMETERS FOR CONTACT FORM =====
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    
    if (serviceParam && contactForm) {
        const projectTypeSelect = document.getElementById('projectType');
        if (projectTypeSelect) {
            projectTypeSelect.value = serviceParam;
        }
    }
    
    // ===== LAZY LOADING IMAGES =====
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    // ===== FORM VALIDATION =====
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (!this.value.trim()) {
                    this.style.borderColor = '#ef4444';
                } else {
                    this.style.borderColor = '';
                }
            });
            
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.style.borderColor = '#10b981';
                }
            });
        });
    });
    
    // ===== COPY TO CLIPBOARD =====
    const copyButtons = document.querySelectorAll('[data-copy]');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.getAttribute('data-copy');
            navigator.clipboard.writeText(text).then(() => {
                const originalText = this.textContent;
                this.textContent = '✓ Copié !';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
    });
    
    // ===== PRINT FUNCTIONALITY =====
    const printButtons = document.querySelectorAll('[data-print]');
    printButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.print();
        });
    });
    
    // ===== LOADING PERFORMANCE =====
    window.addEventListener('load', function() {
        // Remove loading class if any
        document.body.classList.remove('loading');
        
        // Log performance metrics
        if (window.performance) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page loaded in ${pageLoadTime}ms`);
        }
    });
    
    // ===== FAQ ACCORDION (if needed) =====
    const faqItems = document.querySelectorAll('.faq-question');
    faqItems.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = answer.style.maxHeight;
            
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.style.maxHeight = null;
            });
            
            // Open clicked answer if it was closed
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
    
    // ===== TESTIMONIALS SLIDER (if implemented) =====
    const testimonialSlider = document.querySelector('.testimonials-slider');
    if (testimonialSlider) {
        let currentSlide = 0;
        const slides = testimonialSlider.querySelectorAll('.testimonial-slide');
        const totalSlides = slides.length;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }
        
        // Auto-play
        setInterval(nextSlide, 5000);
        
        // Navigation buttons
        const prevBtn = document.querySelector('.testimonial-prev');
        const nextBtn = document.querySelector('.testimonial-next');
        
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        
        // Initialize
        showSlide(currentSlide);
    }
    
    // ===== NOTIFICATION SYSTEM =====
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
            color: white;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 9999;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Add notification animations
    const notifStyle = document.createElement('style');
    notifStyle.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(notifStyle);
    
    // Make showNotification globally available
    window.showNotification = showNotification;
    
    // ===== CONSOLE EASTER EGG =====
    console.log('%c🚀 SOFTMALI - Site développé avec ❤️', 'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%cVous cherchez un développeur ? Contactez-nous !', 'color: #10b981; font-size: 14px;');
    console.log('%ccontact@softmali.com', 'color: #6b7280; font-size: 12px;');
});

// ===== EXTERNAL LINK HANDLER =====
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.hostname !== window.location.hostname) {
        e.target.setAttribute('rel', 'noopener noreferrer');
    }
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Error:', e.message);
    // In production, send error to analytics
});

// ===== PERFORMANCE MONITORING =====
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            // Log performance metrics
            if (entry.entryType === 'largest-contentful-paint') {
                console.log('LCP:', entry.renderTime || entry.loadTime);
            }
        }
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
}
