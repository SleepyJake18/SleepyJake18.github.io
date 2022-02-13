var customDrop = document.querySelector('.customDrop');

function transformText (event) {
    event.currentTarget.setAttribute (
        "style",
        "font-size: 36px; text-shadow: 2px 2px 1px var(--black) ; color: var(--white);"
    );
}

customDrop.addEventListener("click", transformText);
