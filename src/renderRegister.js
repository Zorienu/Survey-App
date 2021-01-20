import crudder from "./crudder";
import renderClient from "./renderClient";
import renderLogin from "./renderLogin";

const Register = crudder("api/auth/register");

let user = {
  name: "",
  email: "",
  password: "",
};

const renderRegister = () => {
  const appContainer = document.getElementById("app-container");
  const registerTemplate = document.getElementById("register-template");
  appContainer.innerHTML = registerTemplate.innerHTML;
  document.getElementById("logo").addEventListener("click", renderClient);

  const registerBtn = document.getElementById("register-btn");
  registerBtn.addEventListener("click", () => {
    const password = document.getElementById("register-user-password").value;
    const rPassword = document.getElementById("register-user-r-password").value;
    if (password !== rPassword) return alert("the passwords are not he same");

    user.name = document.getElementById("register-user-name").value;
    user.email = document.getElementById("register-user-email").value;
    user.password = password;
    if (!user.name || !user.email || !user.password) return alert("You should fill the fields");

    Register.create(user).then((res) => {
      alert(res.message);
      renderLogin();
    });
  });
};

export default renderRegister;
