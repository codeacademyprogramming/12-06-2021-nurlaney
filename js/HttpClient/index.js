export class HttpClient {
    baseUrl;

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get() {
        return fetch(`${this.baseUrl}`).then(resp => resp.json())
    }

}