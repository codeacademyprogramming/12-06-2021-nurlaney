import { HttpClient } from "./HttpClient/index.js"

class ProductApi extends HttpClient {

    constructor() {
        super('https://isko88.github.io/apipizza.json')
    }

    getPizzaList() {
        return this.get();
    }

}


export const pizzaList = new ProductApi();