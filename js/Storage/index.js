class Storage {
    setItem(key, value) {
        localStorage.setItem(key, value);
    }
    getItem(key) {
        localStorage.getItem(key);
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
}

export const storage = new Storage();