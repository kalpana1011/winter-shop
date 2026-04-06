export function initHeader() {
  const closeIcon = document.getElementById("close-icon");
  if (closeIcon) {
    closeIcon.addEventListener("click", () => {
      toggleSideMenu();
    });
  }

  const navToggle = document.getElementById("nav-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      toggleSideMenu();
    });
  }

  const sideMenuLinks = document.querySelectorAll(".side-menu-link");
  console.log("SIDE MENU LINKS ", sideMenuLinks);
  if (sideMenuLinks && sideMenuLinks.length > 0) {
    sideMenuLinks.forEach((element) => {
      element.addEventListener("click", () => {
        toggleSideMenu();
      });
    });
  }
}

function toggleSideMenu() {
  const sideMenu = document.getElementById("side-menu");
  sideMenu?.classList.toggle("show");
}
