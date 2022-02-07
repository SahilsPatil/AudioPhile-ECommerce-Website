// let form_summer_btn = document.getElementById("form_summer_btn")
let upi = document.getElementById("upi")

items_cart = [];
all_items = localStorage.getItem("all_items");

checkout_summery_loader()

function checkout_summery_loader() {
    create_setup()
    form_summery.innerHTML =
        `
    <div class="form_summer_title">
                        SUMMERY
    </div>
    <div class="form_summer_products" id="form_summer_products">
        
    </div>
    <div class="form_summer_total">
        <div class="form_summer_total_name">
            TOTAL
        </div>
        <div class="form_summer_total_num">
            ₹${count_total()}
        </div>
    </div>
    <div class="form_summer_total">
        <div class="form_summer_total_name">
            SHIPPING
        </div>
        <div class="form_summer_total_num">
            $ 50
        </div>
    </div>
    <div class="form_summer_grandtotal">
        <div class="form_summer_grandtotal_name">
            GRAND TOTAL
        </div>
        <div class="form_summer_grandtotal_num">
            ₹${count_total() + 50}
        </div>
    </div>
    <div class="form_summer_btn" id="form_summer_btn">
        CONTINUE & PAY
    </div>
    `

    for (const e of items_cart) {
        form_summer_products.innerHTML += `
        <div class="form_summer_products_item">
            <div class="form_summer_products_item_img_info">
                <div class="form_summer_products_item_img">
                    <img src="${e.img}" alt="">
                </div>
                <div class="form_summer_products_item_name_price">
                    <div class="form_summer_products_item_name">
                    ${e.title}
                    </div>
                    <div class="form_summer_products_item_price">
                    ${e.price}
                    </div>
                </div>
            </div>
            <div class="form_summer_products_item_quantity">
                x${e.quantity}
            </div>
        </div>`
    }

    if (count_total() >= 1) {
        form_summer_btn.style.cursor = "pointer"
        form_summer_btn.style.background = "#D87D4A"
    } else {
        // form_summer_btn.style.pointerEvents="none"
        form_summer_btn.style.cursor = "not-allowed"
        form_summer_btn.style.background = "#d87e4a89"
    }
}

function getValue(radio) {
    if (radio.value == "upi") {
        form_checkout_billing_namefield_long_output.innerHTML = `
        <div class="form_checkout_billing_namefield right_margin_20">
            <div class="form_checkout_billing_namefield_name_error">
                <div class="form_checkout_billing_namefield_name">
                    UPI Number
                </div>
                <div class="form_checkout_billing_namefield_error">
                    Field can not be empty
                </div>
            </div>
            <input type="text" class="form_checkout_billing_namefield_input" placeholder="Jhondoe@gpay21">
        </div>
        <div class="form_checkout_billing_namefield right_margin_20">
            <div class="form_checkout_billing_namefield_name_error">
                <div class="form_checkout_billing_namefield_name">
                    UPI PIN
                </div>
                <div class="form_checkout_billing_namefield_error">
                    Field can not be empty
                </div>
            </div>
            <input type="text" class="form_checkout_billing_namefield_input" placeholder="876055">
        </div>
        `
    } else if (radio.value == "cod") {
        form_checkout_billing_namefield_long_output.innerHTML = `
        <div class="form_checkout_billing_namefield_long_output_img_text">
            <div class="form_checkout_billing_namefield_long_output_img">
                <img src="/images/checkout/icon-cash-on-delivery.svg" alt="">
            </div>
            <div class="form_checkout_billing_namefield_long_output_text">
                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery
                courier arrives at your residence. Just make sure your address is correct so
                that your order will not be cancelled.
            </div>
        </div>
        `
    }
}