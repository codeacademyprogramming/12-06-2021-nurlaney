class Basket {
    showBasketItem() {
        document.querySelector('#subtotal').innerHTML += `${JSON.parse(localStorage.getItem('PIZZA')).reduce((calc, arr) => calc += arr.price, 0)}$`
        document.getElementById('cart-button').addEventListener('click', function() {
            document.getElementById('basketItems').classList.toggle('d-none');
        });
        if (localStorage.getItem('PIZZA')) {
            let basketItems = JSON.parse(localStorage.getItem('PIZZA'));
            console.log(basketItems)
            basketItems.forEach(element => {
                document.querySelector('#basketItems ul').innerHTML += `<li>
        <div class="item d-flex">
            <div class="item-img">
                <img src="./assets/images/pizza3.png" alt="">
            </div>
            <span>${element.name}<p class="f-7">${element.size}</p></span>
            <span class="f-7 float-right">${element.price}$</span><br>
        </div>
    </li>`
            });
        } else {
            document.querySelector('#basketItems ul').innerHTML += `<li>
        <div class="item d-flex">
            nothing to see here
        </div>
    </li>`
        }

    }
}

export const basket = new Basket();