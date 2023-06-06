const linksContainer = document.querySelector(".navigation__links");
const linksSection = document.querySelectorAll(".tab-content");

linksContainer.addEventListener("click", function (e) {
  const link_clicked = e.target.closest(".nav__link");

  linksSection.forEach((tab) => tab.classList.remove("tab-content--active"));

  document
    .querySelector(`.section__${link_clicked.dataset.tab}`)
    .classList.add("tab-content--active");
});
