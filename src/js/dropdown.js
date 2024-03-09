document.addEventListener("DOMContentLoaded", () => {
  openDropdown();
});

const openDropdown = () => {
  const triggers = document.querySelectorAll("[data-trigger]");
  let mql = window.matchMedia("(max-width: 991px)");

  triggers.forEach((trigger) => {
    const triggeredElement = document.getElementById(trigger.dataset.trigger);
    let elementHeight = getComputedStyle(triggeredElement).height;

    if (window.innerWidth <= 991) {
      triggeredElement.style.height = "0px";
    }

    mql.addEventListener("change", () => {
      elementHeight = getComputedStyle(triggeredElement).height;
      if (mql.matches) {
        triggeredElement.style.height = "0px";
      } else {
        triggeredElement.style.height = "auto";
        trigger.classList.remove("active");
      }
    });

    trigger.addEventListener("click", () => {
      trigger.classList.toggle("active");
      if (triggeredElement) {
        if (triggeredElement.style.height === "0px") {
          triggeredElement.style.height = elementHeight;
        } else {
          triggeredElement.style.height = "0px";
        }
      }
    });
  });
};
