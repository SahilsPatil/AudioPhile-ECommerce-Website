let header_cart = document.getElementById("header_cart");
let header_cart_section2 = document.getElementById("header_cart_section2");
let header_cart_is_open = false;

header_cart.addEventListener("click", () => {
    if (!header_cart_is_open) {
        header_cart_section_background.style.opacity = 1;
        header_cart_section_background.style.zIndex = 2;
        header_cart_section2.style.opacity = 1;
        header_cart_section2.style.zIndex = 2;
        document.body.style.overflowY = "hidden";
        header_cart_is_open = true;
    }
})
header_cart_section2.addEventListener("click", () => {
    if (header_cart_is_open) {
        header_cart_section2.style.opacity = -1;
        header_cart_section2.style.zIndex = -2;
        header_cart_section_background.style.opacity = -1;
        header_cart_section_background.style.zIndex = -2;
        document.body.style.overflowY = "visible";
        header_cart_is_open = false;
    }
})

