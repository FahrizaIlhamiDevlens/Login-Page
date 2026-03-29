// ambil form login
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    // supaya halaman tidak reload
    event.preventDefault();

    // ambil input user
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // ======================
    // ISI USERNAME & PASSWORD DISINI
    // ======================

    const correctUsername = "getid";
    const correctPassword = "202100";

    // cek login
    if (username === correctUsername && password === correctPassword) {
      // buka tab baru menuju website
      window.open("https://admin-web-git-main-fahrizas-projects.vercel.app/", "_blank");
    } else {
      alert("anda salah");
    }
  });
