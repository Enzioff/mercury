import axios from "axios";
// eslint-disable-next-line import/named
import { initAlert } from "./alert";

document.addEventListener("DOMContentLoaded", () => {
  initForm();
});

const initForm = () => {
  const form = document.querySelector(".form");

  if (!form) return;

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const url = form.getAttribute("action");
    const input = form.querySelector("input");
    let value = input.value;
    let counter = 0;

    for (let i = 0; i < value.length; i++) {
      if (value[i] !== "_" && value[i] !== "-") {
        counter++;
      }
    }

    if (counter === +input.getAttribute("min") - 7) {
      const data = new FormData();
      data.append(input.name, value);
      axios
        .post(url, data)
        .then((response) => response.data)
        .then((data) => {
          const { ID } = data.fileds;
          window.location = `${window.location.href}?_id=${ID}`;
        })
        .catch(() => {
          initAlert();
        });
    }
  });
};
