
    document.addEventListener("DOMContentLoaded", () => {
      // Enhanced Tabs functionality for multiple tab systems
      function setupTabSystem(tabContainer) {
        const tabButtons = tabContainer.querySelectorAll(".tab-button");
        const tabPanes = tabContainer.querySelectorAll(".tab-pane");
    
        tabButtons.forEach((button) => {
          button.addEventListener("click", () => {
            // Only modify elements within this specific tab container
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabPanes.forEach((pane) => pane.classList.remove("active"));
    
            button.classList.add("active");
            const tabId = button.getAttribute("data-tab");
            tabContainer.querySelector(`#${tabId}`).classList.add("active");
          });
        });
      }
    
      // Initialize all tab systems on the page
      document.querySelectorAll('.tabs').forEach(tabContainer => {
        setupTabSystem(tabContainer);
      });
    
      // Accordion functionality (unchanged)
      const accordionButtons = document.querySelectorAll(".accordion-button");
      accordionButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const accordionItem = button.parentElement;
          const isActive = accordionItem.classList.contains("active");
    
          document.querySelectorAll(".accordion-item").forEach((item) => {
            item.classList.remove("active");
          });
    
          if (!isActive) {
            accordionItem.classList.add("active");
          }
        });
      });
    
      // Scroll animation functionality (unchanged)
      const animateElements = document.querySelectorAll(".animate-on-scroll");
      checkAnimateElements();
      window.addEventListener("scroll", checkAnimateElements);
    
      function checkAnimateElements() {
        animateElements.forEach((element) => {
          if (isElementInViewport(element) && !element.classList.contains("animated")) {
            const delay = element.getAttribute("data-delay") || 0;
            setTimeout(() => {
              element.classList.add("animated");
            }, delay);
          }
        });
      }
    
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 && rect.bottom >= 0;
      }
    });

window.addEventListener('load', function () {
    const itemsPerPage = 10;
    let currentItem = 0;
    const items = document.querySelectorAll('#destinationsGrid .destination-item');
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    function showItems() {
        for (let i = currentItem; i < currentItem + itemsPerPage && i < items.length; i++) {
            items[i].style.display = 'block';
        }
        currentItem += itemsPerPage;
        if (currentItem >= items.length) {
            viewMoreBtn.style.display = 'none';
        }
    }
    items.forEach(item => item.style.display = 'none');
    showItems();
    viewMoreBtn.addEventListener('click', showItems);
});



document.querySelectorAll('.process-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.zIndex = '2';
    });
    item.addEventListener('mouseleave', function () {
        this.style.zIndex = '1';
    });
});



const words = ["Russia", "Dubai", "Iran", "Germany","USA", "UK"];
let wordIndex = 0;
let charIndex = 0;
let currentText = '';
const typingElement = document.getElementById('typing');
function type() {
    if (charIndex < words[wordIndex].length) {
        currentText += words[wordIndex][charIndex];
        typingElement.textContent = currentText;
        charIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 1000);
    }
}
function erase() {
    if (charIndex > 0) {
        currentText = currentText.slice(0, -1);
        typingElement.textContent = currentText;
        charIndex--;
        setTimeout(erase, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    type();
});
