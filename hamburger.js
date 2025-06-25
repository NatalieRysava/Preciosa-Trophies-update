document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButtons = document.querySelectorAll(".hamburger-menu");
  const logo = document.querySelector(".navbar__logo-link");
  const language = document.querySelector(".menu__item--language");

  // Zjistíme jazyk z tagu <html lang="en"> nebo "cs"
  const lang = document.documentElement.lang || "cs"; // výchozí čeština

  // Připravíme si texty pro aria-label podle jazyka
  const ariaTexts = {
    cs: {
      open: "Otevřít hlavní menu",
      close: "Zavřít hlavní menu",
    },
    en: {
      open: "Open main menu",
      close: "Close main menu",
    },
  };

  // Vybereme texty podle jazyka (pokud neznámý jazyk, fallback na cs)
  const texts = ariaTexts[lang] || ariaTexts.cs;

  function hideLogo() {
    logo.style.opacity = "0";
    logo.style.pointerEvents = "none";
  }

  function showLogo() {
    logo.style.opacity = "1";
    logo.style.pointerEvents = "auto";
  }

  function hideLanguage() {
    language.style.opacity = "0";
    language.style.pointerEvents = "none";
  }

  function showLanguageWithDelay() {
    setTimeout(() => {
      language.style.opacity = "1";
      language.style.pointerEvents = "auto";
    }, 300);
  }

  document.body.onclick = (e) => {
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
      hideLanguage();
      setTimeout(() => {
        showLogo();
        showLanguageWithDelay();
      }, 500);
    }

    for (const button of hamburgerButtons) {
      button.classList.remove("hamburger-menu--active");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", texts.open);
    }
  };

  for (const btn of hamburgerButtons) {
    // Inicializuj aria-* při načtení s jazykovou mutací
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", texts.open);

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
        hideLogo();
        btn.setAttribute("aria-expanded", "true");
        btn.setAttribute("aria-label", texts.close);
      } else {
        document.body.classList.remove("no-scroll");
        hideLanguage();
        setTimeout(() => {
          showLogo();
          showLanguageWithDelay();
        }, 500);
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", texts.open);
      }

      btn.classList.toggle("hamburger-menu--active");
    };
  }
});
