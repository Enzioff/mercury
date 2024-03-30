document.addEventListener("DOMContentLoaded", () => {
  addMoreTable();
});

const addMoreTable = () => {
  const blocks = document.querySelectorAll("[data-table-block]");

  blocks.forEach((block) => {
    const table = block.querySelector("[data-table-body]");
    const addButton = block.querySelector("[data-table-add]");
    const tableType = block.getAttribute("data-table-block");

    addButton.addEventListener("click", () => {
      table.insertAdjacentHTML("beforeend", getCurrentTemplate(tableType));
    });

    table.addEventListener("click", (evt) => {
      const { target } = evt;
      if (target.tagName === "TD" && target.dataset.tableRemove === "") {
        target.closest("tr").remove();
      }
    });
  });
};

const getCurrentTemplate = (type) => {
  if (type === "docs") {
    return tableLineDocsTemplate();
  } else {
    return tableLineLabTemplate();
  }
};

const tableLineDocsTemplate = () => {
  return `
    <tr>
      <td><input type="text" name="SERIA_DOC"></td>
      <td><input type="text" name="NUMBER_DOC"></td>
      <td><input type="date" name="DATE_DOC"></td>
      <td> <input type="text" name="TYPE"> </td>
      <td class="info__remove" data-table-remove>-</td>
    </tr>
  `;
};

const tableLineLabTemplate = () => {
  return `
    <tr>
      <td><input type="text" name="NUMBER_ACT"></td>
      <td><input type="text" name="DATE"></td>
      <td><input type="text" name="NAME_LAB"></td>
      <td><input type="text" name="NAME"></td>
      <td><input type="date" name="DATE_RESULT"></td>
      <td><input type="text" name="NUMBER"></td>
      <td><input type="text" name="METHOD"></td>
      <td><input type="text" name="RESULT"></td>
      <td><input type="text" name="CONCLUSION"></td>
      <td class="info__remove" data-table-remove>-</td>
    </tr>
  `;
};
