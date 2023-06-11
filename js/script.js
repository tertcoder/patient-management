const linksContainer = document.querySelector(".navigation__links");
const linksSection = document.querySelectorAll(".tab-content");
const openProfile = document.querySelector(".btnOpen");
const profilesContainer = document.querySelector(".studentProfiles");
const studentProfile = document.querySelector(".studentProfile");

linksContainer.addEventListener("click", function (e) {
  const link_clicked = e.target.closest(".nav__link");

  if (!link_clicked) return;

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

const form = document.querySelector("[data-form]");
const newModal = document.querySelector("[data-new]");
const noticeBtn = document.querySelector("[data-notice-btn]");
form.onsubmit = () => {
  localStorage.setItem("newNotice", "1");
};

if (localStorage.getItem("newNotice") == "1") {
  newModal.classList.remove("hidden");
} else if (localStorage.getItem("newNotice") != "1") {
  newModal.classList.add("hidden");
}

noticeBtn.addEventListener("click", () => {
  localStorage.setItem("newNotice", false);
  newModal.classList.add("hidden");
});
