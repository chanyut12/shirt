let preview_btn = document.querySelector(".preview-btn")

preview_btn.addEventListener("click", () => {
    let shop_option = shop_selection()
    console.log(shop_option)


})

function shop_selection() {
    let checkbox_inputs = document.querySelectorAll("input[type='checkbox']")
    let shop_option = { size: [], color: [], fabric: [], neckline: [], sleeve: [], fit: [] }

    checkbox_inputs.forEach(checkbox_input => {
        const key = checkbox_input.attributes?.name.value;
        if (checkbox_input.checked === true) {
            shop_option[key].push(1);
        }
        else {
            shop_option[key].push(0);
        }
    })

    return shop_option;
}
