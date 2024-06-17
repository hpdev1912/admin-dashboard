const tabBtnList = document.querySelectorAll(".tab_btn");
const tabContentList = document.querySelectorAll(".content");

// Tab active state
tabBtnList.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabBtnList.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    tabContentList.forEach((content) => content.classList.remove("active"));
    tabContentList[index].classList.add("active");
  });
});

// Sidebar active state
const navItemList = document.querySelectorAll(".sidebar-item");
const subMenuItems = document.querySelectorAll(".sidebar-sub-menu-item");

function handleNavItemClick(e) {
  navItemList.forEach((tab) => tab.classList.remove("active"));
  e.currentTarget.classList.add("active");

  subMenuItems.forEach((item) => item.classList.remove("active"));
}

function handleSubMenuItemClick(e) {
  e.stopPropagation();
  const subMenuItem = e.currentTarget;
  const navItem = subMenuItem.closest(".sidebar-item.sub-menu");

  if (navItem) {
    navItem.classList.add("active");
  }

  subMenuItems.forEach((sub) => sub.classList.remove("active"));
  subMenuItem.classList.add("active");

  navItemList.forEach((item) => {
    if (item !== navItem) {
      item.classList.remove("active");
    }
  });
}

navItemList.forEach((tab) => tab.addEventListener("click", handleNavItemClick));
subMenuItems.forEach((subMenuItem) =>
  subMenuItem.addEventListener("click", handleSubMenuItemClick)
);

// Load more button
let loadMoreBtn = document.querySelector("#load-more-btn");
const timelineItemList = document.querySelectorAll(".time-line");
function handleLoadMoreClick() {
  timelineItemList.forEach((item, index) => {
    if (index >= 3) {
      item.classList.remove("d-none");
      item.classList.add("d-flex");
    }
  });
}

loadMoreBtn.addEventListener("click", handleLoadMoreClick);
