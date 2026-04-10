/**
 * Shauvre Theme - JavaScript
 */

(function() {
  'use strict';

  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      const menuIcon = this.querySelector('.menu-icon');
      const closeIcon = this.querySelector('.close-icon');
      
      if (menuIcon && closeIcon) {
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Add to cart functionality
  function addToCart(variantId, quantity = 1) {
    const formData = {
      items: [{
        id: variantId,
        quantity: quantity
      }]
    };

    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // Update cart count
      updateCartCount();
      // Show success message
      showNotification('Added to cart successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      showNotification('Error adding to cart', 'error');
    });
  }

  // Update cart count
  function updateCartCount() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        const cartCounts = document.querySelectorAll('[data-cart-count]');
        cartCounts.forEach(element => {
          element.textContent = cart.item_count;
        });
      });
  }

  // Show notification
  function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 px-6 py-4 rounded-lg shadow-lg z-50 ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white transition-opacity duration-300`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Initialize cart count on page load
  updateCartCount();

  // Product image gallery (if applicable)
  const productImages = document.querySelectorAll('[data-product-image]');
  if (productImages.length > 0) {
    productImages.forEach(image => {
      image.addEventListener('click', function() {
        const mainImage = document.querySelector('[data-main-image]');
        if (mainImage) {
          mainImage.src = this.src;
        }
      });
    });
  }

  // Lazy loading images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Newsletter form success handling
  const newsletterForms = document.querySelectorAll('form[action*="contact"]');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const submitBtn = this.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Subscribing...';
      }
    });
  });

  // Make functions globally available
  window.ShauvreTheme = {
    addToCart: addToCart,
    updateCartCount: updateCartCount,
    showNotification: showNotification
  };

})();
