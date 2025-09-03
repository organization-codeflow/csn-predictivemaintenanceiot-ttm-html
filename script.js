// Dark Mode Toggle Functionality
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-theme');
    
    if (isDarkMode) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        showThemeMessage('Đã chuyển sang chế độ sáng ☀️');
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        showThemeMessage('Đã chuyển sang chế độ tối 🌙');
    }
}

// Load saved theme on page load
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Show theme change message
function showThemeMessage(message) {
    // Create a small notification
    const notification = document.createElement('div');
    notification.className = 'theme-notification';
    notification.textContent = message;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--notification-bg, #667eea);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 25px;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
        font-size: 0.9rem;
    `;
    
    // Add animation styles if not already added
    if (!document.querySelector('#theme-notification-styles')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'theme-notification-styles';
        styleElement.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes fadeOut {
                to {
                    opacity: 0;
                    transform: translateX(100%);
                }
            }
            body.dark-theme .theme-notification {
                --notification-bg: #4a5568;
            }
        `;
        document.head.appendChild(styleElement);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after animation
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme first
    loadSavedTheme();
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Show message function for CTA button
function showMessage() {
    // Create a modal-like alert with custom styling
    const message = `
        🎉 Chào mừng bạn đến với website của chúng tôi!
        
        Cảm ơn bạn đã quan tâm đến dịch vụ của chúng tôi.
        Hãy liên hệ với chúng tôi qua form bên dưới để được tư vấn chi tiết.
    `;
    
    // Show a styled alert
    showCustomAlert('Chào Mừng!', message);
    
    // Scroll to contact section
    setTimeout(() => {
        const contactSection = document.querySelector('#contact');
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = contactSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }, 1000);
}

// Custom alert function
function showCustomAlert(title, message) {
    // Create modal elements
    const modal = document.createElement('div');
    modal.className = 'custom-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <span class="close-btn" onclick="closeModal()">&times;</span>
            </div>
            <div class="modal-body">
                <p>${message}</p>
            </div>
            <div class="modal-footer">
                <button onclick="closeModal()" class="modal-close-btn">Đóng</button>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        <style>
            .custom-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            .modal-content {
                background: white;
                border-radius: 10px;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                animation: slideIn 0.3s ease;
            }
            .modal-header {
                padding: 1.5rem;
                border-bottom: 1px solid #eee;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .modal-header h3 {
                margin: 0;
                color: #667eea;
            }
            .close-btn {
                font-size: 1.5rem;
                cursor: pointer;
                color: #999;
            }
            .close-btn:hover {
                color: #333;
            }
            .modal-body {
                padding: 1.5rem;
            }
            .modal-body p {
                white-space: pre-line;
                line-height: 1.6;
                color: #666;
            }
            .modal-footer {
                padding: 1rem 1.5rem;
                border-top: 1px solid #eee;
                text-align: right;
            }
            .modal-close-btn {
                background: #667eea;
                color: white;
                border: none;
                padding: 0.5rem 1.5rem;
                border-radius: 5px;
                cursor: pointer;
                font-weight: bold;
            }
            .modal-close-btn:hover {
                background: #5a6fd8;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideIn {
                from { transform: translateY(-50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        </style>
    `;
    
    // Add styles to head if not already added
    if (!document.querySelector('#modal-styles')) {
        const styleElement = document.createElement('div');
        styleElement.id = 'modal-styles';
        styleElement.innerHTML = modalStyles;
        document.head.appendChild(styleElement);
    }
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Add global close modal function
    window.closeModal = function() {
        const modal = document.querySelector('.custom-modal');
        if (modal) {
            modal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    };
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Validate form
    if (!name || !email || !message) {
        showCustomAlert('Lỗi', 'Vui lòng điền đầy đủ thông tin vào tất cả các trường.');
        return;
    }
    
    // Show success message
    const successMessage = `
        Cảm ơn ${name} đã liên hệ với chúng tôi!
        
        Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi qua email ${email} trong thời gian sớm nhất.
        
        Nội dung tin nhắn: "${message}"
    `;
    
    showCustomAlert('Gửi Thành Công!', successMessage);
    
    // Reset form
    event.target.reset();
}

// Add scroll effects
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    
    // Add shadow to header when scrolling
    if (scrollPosition > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .about-text, .contact-info, .contact-form');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        observer.observe(element);
    });
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add typing effect to hero title (optional)
    const heroTitle = document.querySelector('.hero-content h2');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
});
