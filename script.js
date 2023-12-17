const root = document.querySelector(":root");
const themeButton = document.querySelector(".theme");
const fontSizeUp = document.querySelector(".font-size-up");
const fontSizeDown = document.querySelector(".font-size-down");

themeButton.addEventListener("click", function() {
    if (getComputedStyle(root).getPropertyValue("--theme") == "dark") {
        root.style.setProperty("--theme", "light");
        root.style.setProperty("--main-bg-col", "#fefcff");
        root.style.setProperty("--lower-bg-col", "#ffffff");
        root.style.setProperty("--sidebar-bg-col", "#ffeafe");
        root.style.setProperty("--hover-col", "#d09cfa");
        root.style.setProperty("--active-col", "#5d2986");
        root.style.setProperty("--link-col", "#8e4bc5");
        root.style.setProperty("--text-light-col", "#141402");
        root.style.setProperty("--text-dark-col", "#fffff4");
        root.style.setProperty("--link-col-filter", "invert(44%) sepia(21%) saturate(1621%) hue-rotate(230deg) brightness(84%) contrast(107%)");
        root.style.setProperty("--hover-col-filter", "invert(66%) sepia(87%) saturate(796%) hue-rotate(207deg) brightness(98%) contrast(101%)");
        root.style.setProperty("--active-col-filter", "invert(21%) sepia(23%) saturate(4443%) hue-rotate(251deg) brightness(93%) contrast(98%)");
        root.style.setProperty("--text-dark-col-filter", "invert(95%) sepia(2%) saturate(1227%) hue-rotate(356deg) brightness(106%) contrast(101%)");
        root.style.setProperty("--panes-bg-filter", "hard-light");
    } else {
        root.style.setProperty("--theme", "dark");
        root.style.setProperty("--main-bg-col", "#060108");
        root.style.setProperty("--lower-bg-col", "#525968");
        root.style.setProperty("--sidebar-bg-col", "#0f0518");
        root.style.setProperty("--hover-col", "#ffb62f");
        root.style.setProperty("--active-col", "#d68915");
        root.style.setProperty("--link-col", "#ffe884");
        root.style.setProperty("--text-light-col", "#f0f8ff");
        root.style.setProperty("--text-dark-col", "#10161b");
        root.style.setProperty("--link-col-filter", "invert(94%) sepia(88%) saturate(647%) hue-rotate(318deg) brightness(102%) contrast(110%)");
        root.style.setProperty("--hover-col-filter", "invert(85%) sepia(25%) saturate(1824%) hue-rotate(329deg) brightness(98%) contrast(108%)");
        root.style.setProperty("--active-col-filter", "invert(74%) sepia(27%) saturate(5372%) hue-rotate(353deg) brightness(87%) contrast(90%)");
        root.style.setProperty("--text-dark-col-filter", "invert(4%) sepia(5%) saturate(5539%) hue-rotate(165deg) brightness(98%) contrast(91%)");
        root.style.setProperty("--panes-bg-filter", "multiply");
    }
});

fontSizeUp.addEventListener("click", function() {
    let size = getFontBaseSize();

    if (size < 48) {
        root.style.setProperty("--font-size-base", String(size + 2) + "px");
    }
});

fontSizeDown.addEventListener("click", function() {
    let size = getFontBaseSize();

    if (size > 4) {
        root.style.setProperty("--font-size-base", String(size - 2) + "px");
    }
});

function getFontBaseSize() {
    let size = getComputedStyle(root).getPropertyValue("--font-size-base");
    size = parseInt(size.slice(0, size.length - 2));
    return size;
}