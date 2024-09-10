document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('userForm');
  const userList = document.getElementById('userList');
  userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const user = {
      name: name,
      email: email
    };
    localStorage.setItem(email, JSON.stringify(user));
    addUserToList(user);
    userForm.reset();
  });
  function addUserToList(user) {
    const li = document.createElement('li');
    li.innerHTML = `${user.name} - ${user.email} <button class='button2' onclick=
  'removerItem("${user.email}")'>Excluir</button>`;
    userList.appendChild(li);
  }
  Object.keys(localStorage).forEach(key => {
    const user = JSON.parse(localStorage.getItem(key));
    addUserToList(user);
  });
});
function removerItem(id) {
  alert(id);
  localStorage.removeItem(id);
  window.location.reload(true);
}