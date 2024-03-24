document.addEventListener("DOMContentLoaded", () => {
  responseAdmin();
});

const responseAdmin = () => {
  const mainForm = document.querySelector("[data-form]");
  if (mainForm) {
    mainForm.addEventListener("submit", (evt) => {});
  }
};
