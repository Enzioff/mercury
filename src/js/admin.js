import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  responseAdmin();
});

const addModal = (modal, error) => {
  const title = modal.querySelector(".article-modal__title");
  const text = modal.querySelector(".article-modal__text");
  modal.classList.add("active");

  if (error) {
    text.textContent = error;
    title.textContent = "Ошибка!";
  } else {
    text.textContent = "";
    title.textContent = "Добавлена новая запись.";
  }

  setTimeout(() => {
    modal.classList.remove("active");
  }, 2000);
};

const responseAdmin = () => {
  const mainForm = document.querySelector("[data-form]");
  const modal = document.querySelector("[data-modal]");
  if (!mainForm) return;
  const getTableData = (table) => {
    const lines = table.querySelectorAll("tbody tr");

    const newArray = [];

    lines.forEach((line) => {
      const els = [
        ...line.querySelectorAll("input"),
        ...line.querySelectorAll("select"),
      ];
      els.forEach((el) => {
        newArray.push({ [el.name]: el.value });
      });
    });

    return newArray;
  };
  const getData = () => {
    const data = new FormData();

    const els = [
      ...mainForm.querySelectorAll("div input"),
      ...mainForm.querySelectorAll("div textarea"),
      ...mainForm.querySelectorAll("div select"),
    ];
    const tables = mainForm.querySelectorAll(".info__table");

    els.forEach((el) => {
      data.append(el.name, el.value);
    });

    data.append("LINKS", JSON.stringify(getTableData(tables[0])));
    data.append("LAB", JSON.stringify(getTableData(tables[1])));

    return data;
  };

  const url = mainForm.getAttribute("action");
  mainForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    axios
      .post(url, getData())
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        if (modal) {
          addModal(modal);
        }
      })
      .catch((error) => {
        console.error(error);
        if (modal) {
          addModal(modal, error.message);
        }
      });
  });
};
