document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio website loaded successfully!");

    // Initialize EmailJS
    emailjs.init("YOUR_PUBLIC_KEY"); // We'll use a fallback method instead

    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    // Form validation and submission for contact form
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();
            const submitBtn = document.querySelector(".submit-btn");
            const btnText = document.querySelector(".btn-text");
            const btnLoading = document.querySelector(".btn-loading");

            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!name || !email || !subject || !message) {
                showNotification("Please fill in all fields.", "error");
                return;
            } 
            
            if (!emailRegex.test(email)) {
                showNotification("Please enter a valid email address.", "error");
                return;
            }

            // Show loading state
            submitBtn.disabled = true;
            btnText.style.display = "none";
            btnLoading.style.display = "inline-flex";

            // Use mailto as the primary method for local testing
            setTimeout(() => {
                const emailBody = encodeURIComponent(
                    `Hi Daniel,\n\n` +
                    `You have received a new message from your portfolio contact form:\n\n` +
                    `Name: ${name}\n` +
                    `Email: ${email}\n` +
                    `Subject: ${subject}\n\n` +
                    `Message:\n${message}\n\n` +
                    `--\n` +
                    `Sent from Portfolio Contact Form`
                );
                
                const mailtoLink = `mailto:richiehavoc@proton.me?subject=${encodeURIComponent('Portfolio Contact: ' + subject)}&body=${emailBody}`;
                
                // Open default email client
                window.open(mailtoLink, '_blank');
                
                showNotification("Email client opened! Please send the message from there.", "success");
                contactForm.reset();

                // Reset button state
                submitBtn.disabled = false;
                btnText.style.display = "inline";
                btnLoading.style.display = "none";
            }, 1500); // Small delay to show loading state
        });
    }

    // Project card animations
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });
    
    // Advanced typing animation that alternates between two names
    const typingText = document.getElementById('typing-text');
    if (typingText) {
        const names = ["I'm Daniel Wambua", "RICHI3 H4V0C"];
        let currentNameIndex = 0;
        let isDeleting = false;
        let charIndex = 0;
        let typingDelay = 100; // Delay between typing each character
        let erasingDelay = 50; // Delay between erasing each character
        let newTextDelay = 1000; // Delay before typing new text
        
        function typeAnimation() {
            const currentName = names[currentNameIndex];
            
            // If deleting text
            if (isDeleting) {
                // Remove a character
                typingText.textContent = currentName.substring(0, charIndex - 1);
                charIndex--;
                typingDelay = erasingDelay;
                
                // If finished deleting
                if (charIndex === 0) {
                    isDeleting = false;
                    currentNameIndex = (currentNameIndex + 1) % names.length; // Switch to next name
                    typingDelay = 500; // Pause before typing next name
                }
            } 
            // If typing text
            else {
                // Add a character
                typingText.textContent = currentName.substring(0, charIndex + 1);
                charIndex++;
                typingDelay = 100;
                
                // If finished typing
                if (charIndex === currentName.length) {
                    isDeleting = true;
                    typingDelay = newTextDelay; // Pause before starting to delete
                }
            }
            
            setTimeout(typeAnimation, typingDelay);
        }
        
        // Start the typing animation
        setTimeout(typeAnimation, 500);
    }
    
    // Helper function to show notifications
    function showNotification(message, type) {
        // Check if a notification container exists
        let notificationContainer = document.querySelector('.notification-container');
        
        // If not, create one
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.className = 'notification-container';
            document.body.appendChild(notificationContainer);
            
            // Add CSS for the notification container
            const style = document.createElement('style');
            style.textContent = `
                .notification-container {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 1000;
                }
                
                .notification {
                    padding: 15px 25px;
                    margin-bottom: 10px;
                    border-radius: 5px;
                    color: white;
                    font-weight: bold;
                    animation: slideIn 0.5s ease forwards, fadeOut 0.5s ease 2.5s forwards;
                    transform: translateX(100%);
                    opacity: 0;
                }
                
                .notification.success {
                    background-color: #4CAF50;
                }
                
                .notification.error {
                    background-color: #f44336;
                }
                
                @keyframes slideIn {
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes fadeOut {
                    to {
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Create and add notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notificationContainer.appendChild(notification);
        
        // Remove notification after animation completes
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    // Add lazy loading for images
    const images = document.querySelectorAll('img');
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    }
    
    // Add scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Add CSS for scroll animations
    const scrollStyle = document.createElement('style');
    scrollStyle.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(scrollStyle);
});