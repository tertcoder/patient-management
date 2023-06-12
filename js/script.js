const linksContainer = document.querySelector(".navigation__links");
const linksSection = document.querySelectorAll(".tab-content");
const openProfile = document.querySelector(".btnOpen");
const profilesContainer = document.querySelector(".studentProfiles");
const studentProfile = document.querySelector(".studentProfile");

const form = document.querySelector("[data-form]");
const newModal = document.querySelector("[data-new]");
const noticeBtn = document.querySelector("[data-notice-btn]");

const popBtn = document.querySelector(".dilemmaPopup");
const modalPopup = document.querySelector(".modalPopup");
const closePopup = document.querySelector(".closePopup");
const closePopupBtn = document.querySelector(".closePopupBtn");

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

const popup = function () {
  modalPopup.classList.remove("hidden");
};
const close = function () {
  modalPopup.classList.add("hidden");
};
popBtn.addEventListener("click", popup);
closePopup.addEventListener("click", close);
modalPopup.addEventListener("click", function (e) {
  const blury = e.target.closest(".backBlur");
  if (!blury) return;

  close();
});
closePopupBtn.addEventListener("click", close);
