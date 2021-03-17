function deleteByEmail() {
  const input = document.querySelector('input');
  const emails = Array.from(document.querySelectorAll('td'));
  /* 
  const emails = Array.from(document.querySelctorAll('tr>td:last-child');
  */
  const results = document.querySelector('#result');
  let email = emails.find(email => email.textContent === input.value);

  if (email) {
    email.parentElement.remove();
    results.innerText = 'Deleted.';
  } else {
    results.innerText = 'Not found​.';
  }
}
