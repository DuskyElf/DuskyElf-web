const themes = [
  {
    "foreground": "#cdd6f4",
    "background": "#11111b",
    "secondary": "#ea76cb",
    "tertiary": "#04a5e5",
  },
  {
    "foreground": "#11111b",
    "background": "#e6e9ef",
    "secondary": "#ea76cb",
    "tertiary": "#04a5e5",
  },
  {
    "foreground": "#eee",
    "background": "#000",
    "secondary": "#ea76cb",
    "tertiary": "#40a2d8",
  },
  {
    "foreground": "#eee",
    "background": "#111",
    "secondary": "#aaa",
    "tertiary": "#666",
  },
];

const themeMenu = document.getElementById("theme-menu");
const themeSelector = document.getElementById("theme-selector");

(() => {
  let menuElem = themeMenu.firstChild;

  let targetTheme = undefined;
  const enterHandler = (e) => {
    targetTheme = themes[e.target.getAttribute("data-theme-index")];
    showTheme(targetTheme)
  }
  const leaveHandler = (e) => {
    showTheme(theme);
  }
  const clickHandler = (e) => {
    theme = targetTheme;
    themeSelector.blur();
    localStorage.setItem("theme", JSON.stringify(targetTheme));
  }

  for (let i = 0; i < themes.length; ++i) {
    if (i !== 0) // original menuElem is already there
      themeMenu.appendChild(menuElem.cloneNode(true));

    menuElem = themeMenu.children[i];

    const setBackground = (index, field) => {
      menuElem.children[index]
        .style.setProperty("background-color", themes[i][field]);
    }

    setBackground(0, "foreground");
    setBackground(1, "background");
    setBackground(2, "secondary");
    setBackground(3, "tertiary");

    menuElem.setAttribute("data-theme-index", i);
    menuElem.addEventListener("pointerenter", enterHandler);
    menuElem.addEventListener("pointerleave", leaveHandler);
    menuElem.addEventListener("click", clickHandler);
  }
})()
