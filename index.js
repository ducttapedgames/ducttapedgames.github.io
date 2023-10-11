if (window.location.protocol == "http:" && !window.location.href.includes("localhost")) {
    window.location.href = "https:" + window.location.href.substring(5);
}

function scrollToElement(elementID) {
    element = document.getElementById(elementID);
    element.scrollIntoView({
        behavior: "smooth"
    })
}