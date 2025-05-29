         document.addEventListener('DOMContentLoaded', function () {
                const accordionButtons = document.querySelectorAll('.accordion-button');

                accordionButtons.forEach(button => {
                    button.addEventListener('click', function () {
                        const accordionItem = this.parentElement;
                        const content = this.nextElementSibling;

                        // Toggle active class
                        accordionItem.classList.toggle('active');

                        // Toggle content visibility
                        if (accordionItem.classList.contains('active')) {
                            content.style.maxHeight = content.scrollHeight + 'px';
                            content.style.padding = '1rem';
                        } else {
                            content.style.maxHeight = '0';
                            content.style.padding = '0';
                        }
                    });
                });
            });
