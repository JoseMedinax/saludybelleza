// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            
            // Here you'll add code to handle the form submission for now, we'll just log it
            console.log('Form submitted!');
            
            // You can add code here to send to Google Forms
            // or your preferred form handling service
        });
    }
});