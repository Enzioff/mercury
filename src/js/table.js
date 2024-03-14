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
      <td><input type="text" name="docSeries"></td>
      <td><input type="text" name="docNumber"></td>
      <td><input type="date" name="docDate"></td>
      <td>
        <select name="docType" id="">
          <option value="">Транспортная накладная</option>
          <option value="">Транспортная накладная</option>
          <option value="">Транспортная накладная</option>
          <option value="">Транспортная накладная</option>
        </select>
      </td>
      <td class="info__remove" data-table-remove>-</td>
    </tr>
  `;
};

const tableLineLabTemplate = () => {
  return `
    <tr>
      <td><input type="text" name="actNumber"></td>
      <td><input type="text" name="sumplingDate"></td>
      <td><input type="text" name="labName"></td>
      <td><input type="text" name="indicatorName"></td>
      <td><input type="date" name="resultDate"></td>
      <td><input type="text" name="researchMethod"></td>
      <td><input type="text" name="expertiseNumber"></td>
      <td>
        <select name="researchResult">
          <option value="#">Положительный</option>
          <option value="#">Отрицательный</option>
        </select>
      </td>
      <td><input type="text" name="conclusion"></td>
      <td class="info__remove" data-table-remove>-</td>
    </tr>
  `;
};
