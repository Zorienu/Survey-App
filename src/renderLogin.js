import crudder from "./crudder";
import renderSurveyControlPanel from "./renderSurveyControlPanel";
import renderRegister from "./renderRegister";
import renderClient from "./renderClient";

const Login = crudder("api/auth/login");
const userInfo = crudder("api/auth/me");

const renderLogin = () => {
  document.getElementById("app-container").innerHTML = document.getElementById("login-template").innerHTML;
  document.getElementById("logo").addEventListener("click", renderClient);

  // add event login button
  const loginBtn = document.getElementById("login-submit");
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("login-user-email").value;
    const password = document.getElementById("login-user-password").value;

    Login.create({ email, password }).then((res) => {
      if (!res.token) return alert(res.message);

      localStorage.setItem("token", res.token);

      userInfo.get(res.token).then((user) => {
        localStorage.setItem("user", JSON.stringify(user));
        renderSurveyControlPanel();
      });
    });
  });

  // add event register button
  const registerBtn = document.getElementById("login-register-btn");
  registerBtn.addEventListener("click", renderRegister);
};

export default renderLogin;
