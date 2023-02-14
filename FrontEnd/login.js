const form = document.getElementById('login');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const data = {
    email: email,
    password: password
  };

  fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Identifiants invalides');
    }
    return response.json();
  })
  .then(datalog => {
    // Rediriger vers une page sécurisée
    window.location.href = './index.html';
  })
});