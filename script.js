const form = document.querySelector("#contact-form");
const message = document.querySelector("#form-message");
const themeButton = document.querySelector("#theme-button");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeButton.textContent = "☀️ Светлая тема";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  message.textContent = "Спасибо! Сообщение отправлено.";
  message.classList.add("success");

  form.reset();

 setTimeout(function () {
    message.textContent = "";
    message.classList.remove("success");
  }, 3000);

});

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeButton.textContent = "☀️ Светлая тема";
    localStorage.setItem("theme", "dark");
  } else {
    themeButton.textContent = "🌙 Тёмная тема";
    localStorage.setItem("theme", "light");
  }
});