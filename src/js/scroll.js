document.addEventListener("DOMContentLoaded", () => {
  scrollEvent();
});

const scrollEvent = () => {
  const contentHeader = document.querySelectorAll("[data-content-header]");
  const content = document.querySelector(".page-content");

  contentHeader.forEach((header) => {
    const headerOffsetTop = header.offsetTop;
    let headerHeight = parseInt(getComputedStyle(header).height, 10);

    window.addEventListener("scroll", () => {
      console.log(headerOffsetTop, headerHeight);
      if (window.innerWidth >= 992) {
        if (headerOffsetTop < headerHeight) {
          if (window.pageYOffset >= headerHeight - headerOffsetTop) {
            header.classList.add("fixed");
            content.style.marginTop = `${headerHeight}px`;
          } else {
            header.classList.remove("fixed");
            content.style.marginTop = `0px`;
          }
        } else {
          if (window.pageYOffset >= headerOffsetTop - headerHeight) {
            header.classList.add("fixed");
            content.style.marginTop = `${headerHeight}px`;
          } else {
            header.classList.remove("fixed");
            content.style.marginTop = `0px`;
          }
        }
      } else {
        header.classList.remove("fixed");
        content.style.marginTop = `0px`;
      }
    });
    if (window.innerWidth <= 991) {
      content.style.paddingTop = `${headerHeight}px`;
    }
    window.addEventListener("resize", () => {
      headerHeight = parseInt(getComputedStyle(header).height, 10);
      if (window.innerWidth <= 991) {
        content.style.paddingTop = `${headerHeight}px`;
      } else {
        content.style.paddingTop = `8px`;
      }
    });
  });
};
