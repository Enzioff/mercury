document.addEventListener("DOMContentLoaded", () => {
  scrollEvent();
});

const scrollEvent = () => {
  const contentHeader = document.querySelectorAll("[data-content-header]");
  const sidebar = document.getElementById("sidebar");
  const content = document.querySelector(".page-content");

  contentHeader.forEach((header) => {
    const headerOffsetTop = header.offsetTop;
    let headerHeight = parseInt(getComputedStyle(header).height, 10);

    window.addEventListener("scroll", () => {
      if (window.innerWidth >= 992) {
        if (window.pageYOffset >= headerOffsetTop - headerHeight) {
          header.classList.add("fixed");
          content.style.marginTop = `${headerHeight}px`;
        } else {
          header.classList.remove("fixed");
          content.style.marginTop = `0px`;
        }
      } else {
        header.classList.remove("fixed");
        content.style.marginTop = `0px`;
      }
    });
    if (window.innerWidth <= 991) {
      sidebar.style.top = `${headerHeight + 45}px`;
    }
    window.addEventListener("resize", () => {
      headerHeight = parseInt(getComputedStyle(header).height, 10);
      sidebar.style.top = `${headerHeight + 45}px`;
      if (window.innerWidth <= 991) {
        content.style.paddingTop = `${headerHeight}px`;
      } else {
        content.style.paddingTop = `8px`;
      }
    });
  });
};