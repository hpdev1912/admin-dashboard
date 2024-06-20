// Tabs Functionality
const tabBtnList = document.querySelectorAll(".tab_btn");
const tabContentList = document.querySelectorAll(".content");

tabBtnList.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabBtnList.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    tabContentList.forEach((content) => content.classList.remove("active"));
    tabContentList[index].classList.add("active");
  });
});

// Sidebar Functionality
const navItemList = document.querySelectorAll(".sidebar-item");
const subMenuItems = document.querySelectorAll(".sidebar-sub-menu-item");
const navLinks = document.querySelectorAll(".sidebar-item a");

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;

  navLinks.forEach(function (link) {
    if (link.getAttribute("href").indexOf(currentPath || "/") !== -1) {
      link.parentElement.classList.add("active");

      navItemList.forEach((item) => {
        if (item !== link.parentElement) {
          item.classList.remove("active");
        }
      });
    }
  });
});

function handleNavItemClick(e) {
  if (e.currentTarget.children[0].getAttribute("href") === "#") {
    navItemList.forEach((tab) => tab.classList.remove("active"));
    e.currentTarget.classList.add("active");

    subMenuItems.forEach((item) => item.classList.remove("active"));
  }
}

function handleSubMenuItemClick(e) {
  e.stopPropagation();
  const subMenuItem = e.currentTarget;
  if (subMenuItem.children[0].getAttribute("href") === "#") {
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
}

navItemList.forEach((tab) => tab.addEventListener("click", handleNavItemClick));
subMenuItems.forEach((subMenuItem) =>
  subMenuItem.addEventListener("click", handleSubMenuItemClick)
);

// Load more button functionality
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

loadMoreBtn?.addEventListener("click", handleLoadMoreClick);

// Member support specific functionality
const boardNameElementList = document.querySelectorAll(".board-item-card-name");
const priorityType = document.getElementById("priority-type");
const priorityDropdownBtn = document.getElementById("priority-dropdown-btn");
const priorityDropDownContent = document.querySelectorAll(
  ".priority-dropdown > .dropdown-content"
);
const priorityDropdownList = document.querySelectorAll(
  ".priority-dropdown > .dropdown-content > li"
);

const userManager = document.getElementById("user-manager");
const userMgmtDropdownBtn = document.getElementById("user-manager-dropbtn");
const userDropdownContent = document.querySelectorAll(
  ".user-dropdown-list > .dropdown-content"
);
const userDropdownList = document.querySelectorAll(
  ".user-dropdown-list > .dropdown-content > li"
);

priorityDropdownList.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    priorityType.innerHTML = link.innerHTML;
    priorityDropdownBtn.style.display = "none";
    priorityDropDownContent[0].style.display = "none";
  });
});

priorityType?.addEventListener("click", function () {
  if (priorityDropDownContent[0].style.display === "block") {
    priorityDropDownContent[0].style.display = "none";
  } else {
    priorityDropDownContent[0].style.display = "block";
  }
});

userDropdownList?.forEach((user) => {
  user.addEventListener("click", function (event) {
    event.preventDefault();
    userManager.innerHTML = user.innerHTML;
    userMgmtDropdownBtn.style.display = "none";
    userDropdownContent[0].style.display = "none";
  });
});

userMgmtDropdownBtn?.addEventListener("click", function () {
  if (userDropdownContent[0].style.display === "block") {
    userDropdownContent[0].style.display = "none";
  } else {
    userDropdownContent[0].style.display = "block";
  }
});

// Drawer functionality
boardNameElementList?.forEach((boardName) => {
  boardName.addEventListener("click", () => {
    const drawerElement = document.getElementById("drawer");
    drawerElement.style.display = "block";
  });
});

const closeDrawerBtn = document.getElementById("close-drawer");
closeDrawerBtn?.addEventListener("click", () => {
  const drawerElement = document.getElementById("drawer");
  drawerElement.style.display = "none";
});

// Checklist functionality
const checkListItems = document.querySelectorAll(".check-list-item > input");

checkListItems?.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.checked = e.target.checked;
    const totalCheckbox = checkListItems.length;
    const totalCheckboxWasChecked = document.querySelectorAll(
      '.check-list-item > input[type="checkbox"]:checked'
    ).length;
    const result = Math.round((totalCheckboxWasChecked / totalCheckbox) * 100);
    const actualPercentItem = document.getElementById("actual-percent");
    actualPercentItem.style.width = `${result}%`;

    if (totalCheckbox === totalCheckboxWasChecked) {
      const confirmBtn = document.getElementById("confirm-button");
      confirmBtn.classList.remove("button-disabled");
    }
  });
});

// File upload and delete functionality
const deleteFile = document.getElementById("delete-file");

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

if (deleteFile) {
  deleteFile.addEventListener("click", () => {
    const fileInfo = document.getElementById("file-info-container");
    fileInfo.style.display = "none";
    document.getElementById("upload-form").style.display = "block";
  });
}

function handleAttachFile(fileName) {
  const fileNameElement = document.getElementById("filename");
  const fileInfo = document.getElementById("file-info-container");
  fileNameElement.textContent = fileName;
  fileInfo.style.display = "flex";
  document.getElementById("upload-form").style.display = "none";
}

document.addEventListener("drop", (e) => {
  document.getElementById("file").files = e.dataTransfer.files;
  e.preventDefault();
  const fileName = e.dataTransfer.files[0].name;
  if (fileName) {
    handleAttachFile(fileName);
  }
});

const fileUpload = document.getElementById("file");
if (fileUpload) {
  fileUpload.onchange = function (e) {
    const fileName = e.target.files[0].name;
    if (fileName) {
      handleAttachFile(fileName);
    }
  };
}
