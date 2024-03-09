import inputmask from "inputmask/lib/inputmask";

document.addEventListener("DOMContentLoaded", () => {
  const allInputs = document.querySelectorAll("input");

  allInputs.forEach((el) => {
    if (el.dataset.code === "") {
      inputmask({
        regex:
          "[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}",
      }).mask(el);
    }
  });
});
