document.querySelector('form').addEventListener('submit', function (event) {
    alert('Thank you for your message! We will get back to you soon.');
    event.preventDefault(); // Prevents form submission for demonstration
});
