export const initAlert = () => {
  const alert = document.querySelector("[data-alert]");
  alert.classList.add("visible");
  const close = alert.querySelector("[data-close]");

  close.addEventListener("click", () => {
    alert.classList.remove("visible");
  });
};
