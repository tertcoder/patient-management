const linksContainer = document.querySelector(".navigation__links");
const linksSection = document.querySelectorAll(".tab-content");
const openProfile = document.querySelector(".btnOpen");
const profilesContainer = document.querySelector(".studentProfiles");
const studentProfile = document.querySelector(".studentProfile");

linksContainer.addEventListener("click", function (e) {
  const link_clicked = e.target.closest(".nav__link");

  linksSection.forEach((tab) => tab.classList.remove("tab-content--active"));

  document
    .querySelector(`.section__${link_clicked.dataset.tab}`)
    .classList.add("tab-content--active");
});

openProfile.addEventListener("click", function (e) {
  e.preventDefault();
  profilesContainer.classList.add("hidden");
  studentProfile.classList.remove("hidden");
});
