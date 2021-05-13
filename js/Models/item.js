import { pizzaList } from '../ProductApi.js';
import { storage } from '../Storage/index.js';
// import { const } from '../Storage/consts.js';

class Items {
    items = pizzaList.getPizzaList();
    wrapper = document.getElementById('item-wrapper');

    getPizzas() {
        this.items.then(res => {
            res.forEach((item, i) => {
                this.wrapper.innerHTML += `<div class="col-md-3">
                <div class="pizza-box">
                    <div id='size-wrapper' class="select-size d-none">
                        <h4 class="f-7">Sizes :</h4>
                        <div class="size-range">
                            <input id='size-input' data-key='small' type="radio">
                            <span>small - 20cm</span>
                        </div>
                        <div class="size-range">
                            <input id='size-input' data-key='medium' type="radio">
                            <span>small - 20cm</span>
                        </div>
                        <div class="size-range">
                            <input id='size-input' data-key='large' type="radio">
                            <span>small - 20cm</span>
                        </div>
                        <button id='add-to-basket' class="add-to-basket">Add To Basket</button>
                    </div>
                    <div class="img-part">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="box-body">
                        <span class="box-title f-7">${item.name}</span>
                        <span class="f-4 float-right">32cm</span>
                        <p class="f-4">${item.topping[i]}</p>
                        <h3 class="text-center">119 UAH</h3>
                    </div>
                    <div class="round">
                        <div id="select-size" class="icon-wrapper">
                            <i class="fas fa-shopping-bag"></i>
                        </div>
                    </div>
                </div>
                </div>`;
                document.querySelectorAll("#select-size").forEach((el, idx) => {
                    el.addEventListener("click", function() {
                        document.querySelectorAll("#size-wrapper")[idx].classList.toggle("d-none");
                    });
                });
                document.querySelectorAll("#add-to-basket").forEach((el, idx) => {
                    el.addEventListener("click", function() {
                        document.querySelectorAll("#size-wrapper")[idx].classList.add("d-none");
                        document.querySelectorAll('#size-input').forEach((input, i) => {
                            if (input.checked) {
                                let size = input.getAttribute('data-key');
                                let locals = localStorage.getItem('PIZZA') ? JSON.parse(localStorage.getItem('PIZZA')) : [];
                                let subtotal = localStorage.getItem('PIZZA') ? JSON.parse(localStorage.getItem('PIZZA')).reduce((calc, arr) => calc += arr.price, 0) : res[idx].price;
                                let data = { name: res[idx].name, size: size, price: res[idx].price, subtotal: subtotal };
                                locals.push(data);
                                localStorage.setItem('PIZZA', JSON.stringify(locals));
                            } else {
                                console.log('error')
                            }
                        })
                    });
                });
            });
        });
    }
}

export const pizzas = new Items();