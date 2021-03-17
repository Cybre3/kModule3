function validate() {
  const input = document.getElementById('email');
  const regex = /[a-z]+@[a-z]+\.[a-z]{1,3}/g;

  input.addEventListener('change', (e) => {
    if (!regex.test(e.target.value)) {
      e.target.classList.add('error');
    } else {
      e.target.classList.remove('error');
    }
  });
}
