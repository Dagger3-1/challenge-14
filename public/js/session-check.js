const checkSession = async () => {
  const response = await fetch('/api/users/check-session');
  if (!response.ok) {
    alert('Your session has expired. Please log in again.');
    document.location.replace('/login');
  }
};

// Check session every 5 minutes
setInterval(checkSession, 300000);

// Check session before any form submission
document.addEventListener('submit', async (event) => {
  if (event.target.matches('form')) {
    event.preventDefault();
    await checkSession();
    event.target.submit();
  }
}); 