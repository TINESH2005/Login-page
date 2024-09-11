// Example: Preventing form default submission for demonstration purposes
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login button clicked!');
});
function togglePassword() {
            const passwordInput = document.getElementById('password');
            const toggleButton = document.querySelector('.toggle-password');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleButton.textContent = 'Hide';
            } else {
                passwordInput.type = 'password';
                toggleButton.textContent = 'Show';
            }
        }
