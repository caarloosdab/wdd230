document.getElementById('user-form').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        event.preventDefault();
        document.getElementById('password-error').style.display = 'block';
        document.getElementById('password').focus();
        document.getElementById('password').value = '';
        document.getElementById('confirm-password').value = '';
    }
});