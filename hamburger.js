document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButtons = document.querySelectorAll(".hamburger-menu");

  document.querySelector("body").onclick = (e) => {
    const menus = document.querySelectorAll(".hamburger-menu-list");
    let anyMenuActive = false;

    for (const menu of menus) {
      if (!menu.classList.contains("navbar__menu--hidden")) {
        anyMenuActive = true;
      }
      menu.classList.add("navbar__menu--hidden");
    }

    if (anyMenuActive) {
      document.body.classList.remove("no-scroll");
    }

    for (const button of hamburgerButtons) {
      button.classList.remove("hamburger-menu--active");
    }
  };

  for (const btn of hamburgerButtons) {
    btn.onclick = (event) => {
      event.stopPropagation();
      const menus = document.querySelectorAll(".hamburger-menu-list");
      let anyMenuActive = false;

      for (const menu of menus) {
        menu.classList.toggle("navbar__menu--hidden");
        if (!menu.classList.contains("navbar__menu--hidden")) {
          anyMenuActive = true;
        }
      }

      if (anyMenuActive) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }

      btn.classList.toggle("hamburger-menu--active");
    };
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButtons = document.querySelectorAll(".hamburger-menu");
  const logo = document.querySelector(".navbar__logo-link");
  const language = document.querySelector(".menu__item--language");

  function hideLogo() {
    logo.style.opacity = "0";
    logo.style.pointerEvents = "none";
  }

  function showLogo() {
    logo.style.opacity = "1";
    logo.style.pointerEvents = "auto";
  }

  // Funkce pro skrytí language ihned
  function hideLanguage() {
    language.style.opacity = "0";
    language.style.pointerEvents = "none";
  }

  // Funkce pro zobrazení language s 0.3s zpožděním
  function showLanguageWithDelay() {
    setTimeout(() => {
      language.style.opacity = "1";
      language.style.pointerEvents = "auto";
    }, 300);
  }

  document.querySelector("body").onclick = (e) => {
    const menus = document.querySelectorAll(".hamburger-menu-list");
    let anyMenuActive = false;

    for (const menu of menus) {
      if (!menu.classList.contains("navbar__menu--hidden")) {
        anyMenuActive = true;
      }
      menu.classList.add("navbar__menu--hidden");
    }

    if (anyMenuActive) {
      document.body.classList.remove("no-scroll");

      // Při zavření menu ihned skryjeme language
      hideLanguage();

      // Po 0.5s zobrazíme logo a po dalších 0.3s language
      setTimeout(() => {
        showLogo();
        showLanguageWithDelay();
      }, 500);
    }

    for (const button of hamburgerButtons) {
      button.classList.remove("hamburger-menu--active");
    }
  };

  for (const btn of hamburgerButtons) {
    btn.onclick = (event) => {
      event.stopPropagation();
      const menus = document.querySelectorAll(".hamburger-menu-list");
      let anyMenuActive = false;

      for (const menu of menus) {
        menu.classList.toggle("navbar__menu--hidden");
        if (!menu.classList.contains("navbar__menu--hidden")) {
          anyMenuActive = true;
        }
      }

      if (anyMenuActive) {
        document.body.classList.add("no-scroll");

        // Při otevření menu necháme language viditelný (neděláme nic)
        hideLogo();
      } else {
        document.body.classList.remove("no-scroll");

        // Při zavření menu ihned skryjeme language
        hideLanguage();

        // Po 0.5s zobrazíme logo a po dalších 0.3s language
        setTimeout(() => {
          showLogo();
          showLanguageWithDelay();
        }, 500);
      }

      btn.classList.toggle("hamburger-menu--active");
    };
  }
});
