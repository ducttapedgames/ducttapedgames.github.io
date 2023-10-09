function scrollToElement(elementID) {
    element = document.getElementById(elementID);
    element.scrollIntoView({
        behavior: "smooth"
    })
}