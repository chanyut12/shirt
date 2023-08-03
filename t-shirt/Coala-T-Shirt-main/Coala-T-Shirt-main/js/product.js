
// Dynamic choice selected

async function ProductPage() {

    const product_url = 'http://127.0.0.1:3000/product/1';
    const shop_url = 'http://127.0.0.1:3000/shop/';
    const type_url = 'http://127.0.0.1:3000/type/';

    const options = {
        method: "GET",
        headers: { 'Content-type': 'application/json' }
    }

    var HTML_template = `<div class="radio-group">
                        <input type="radio" name="$name" value="$value" id="$name-$value">
                        <label for="$name-$value" class="radio-label">$value</label>
                    </div>`

    var keys = ['size', 'color', 'fabric', 'neckline', 'sleeve-length', 'fit']

    await fetch(product_url, options)
        .then(res => res.json())
        .then(async product => {
            console.log(product);

            // Product detail (focus size)
            await fetch(type_url + product['type'], options)
                .then(res => res.json())
                .then(async product_type => {
                    var template_type = JSON.parse(product_type["property"])
                    console.log(template_type)

                    for (const [index, key] of keys.entries()) {
                        console.log(key)
                        let sub_template = template_type[key]
                        console.log(sub_template)

                        let sub_product = JSON.parse(product['property'])[key]
                        console.log(sub_product)

                        // Add Button
                        for (let i = 0; i < sub_product.length; i++) {
                            if (sub_product[i] == 1) await addButton(key, sub_template[i], HTML_template, index)
                        }
                    }

                })
                .catch(error => console.error("Error", error))

            // Shop detail
            fetch(shop_url + product['shop_id'], options)
                .then(res => res.json())
                .then(shop => {
                    console.log(shop)
                    // Shop name
                    document.getElementsByClassName("shop-name")[0].innerHTML = shop['name'];
                })
        })
        .catch(error => {
            console.error("Error", error)
        })

    document.querySelectorAll("input[type='radio']").forEach(e => {
        e.addEventListener("change", () => {
            console.log(e.attributes?.value.value)
        })
    })

}

function addButton(name, value, template, i) {
    let element = document.getElementsByClassName("input-row-group")[i]
    template = template.replaceAll('$name', name).replaceAll('$value', value)
    // console.log(template)
    element.innerHTML += template
}

function order() {
    // Insert orderDB 
    // const order_url = 'http://127.0.0.1:3000/order/';

    // const data = {
    //     "user_id": 1,
    //     "product_id": 1,
    //     "select_property": {
    //         "size": 2,
    //         "color": 0,
    //         "fabric": 0,
    //         "feckline": 0,
    //         "sleeve-length": 0,
    //         "fit": 1
    //     },
    //     "amount": 0,
    //     "neutral_mark": 0
    // }

    // const options = {
    //     method: "GET",
    //     headers: { 'Content-type': 'application/json' }
    // }

    // let buttonSelect = document.getEle
}

ProductPage()

window.onload = () => {
    document.querySelectorAll("input[type='radio']").forEach(e => {
        e.addEventListener("change", () => {
            console.log(e.attributes?.value.value)
        })
    })
}