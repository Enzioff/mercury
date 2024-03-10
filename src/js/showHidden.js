document.addEventListener("DOMContentLoaded", () => {
  showHidden();
});

const showHidden = () => {
  const triggerElement = document.querySelectorAll("[data-show-hidden]");

  triggerElement.forEach((trigger, idx) => {
    const chevroneDown = trigger.querySelector(".fa-angle-double-down");
    const chevroneUp = trigger.querySelector(".fa-angle-double-up");
    const content = document.querySelectorAll("[data-show-content]");

    trigger.addEventListener("click", () => {
      if (content[idx].style.display === "none") {
        content[idx].style.display = "block";
        chevroneDown.style.display = "none";
        chevroneUp.style.display = "inline-block";
      } else {
        content[idx].style.display = "none";
        chevroneDown.style.display = "inline-block";
        chevroneUp.style.display = "none";
      }
    });
  });
};
