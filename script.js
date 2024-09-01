// Example: Preventing form default submission for demonstration purposes
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login button clicked!');
});
