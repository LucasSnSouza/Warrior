export const Storage = {
    _make(key, data) {
        return {
            key,
            data,

            push(field, value){
                this.data[field].push(value)
                return this;
            },

            set(field, value) {
                this.data[field] = value;
                return this;
            },

            merge(obj) {
                this.data = { ...this.data, ...obj };
                return this;
            },

            replace(newData) {
                this.data = { ...newData };
                return this;
            },

            replaceInList(field, key, value, newItem) {
                const index = this.data[field].findIndex(item => item[key] === value);

                if (index !== -1) {
                    this.data[field].splice(index, 1, newItem);
                }

                return this;
            },

            all() {
                return this.data;
            },

            field(field) {
                return this.data[field];
            },

            delete(field) {
                delete this.data[field];
                return this;
            },

            save() {
                localStorage.setItem(this.key, JSON.stringify(this.data));
                return this;
            },

            clear() {
                this.data = {};
                localStorage.removeItem(this.key);
                return this;
            }
        };
    },

    get(key) {
        const saved = localStorage.getItem(key);
        const data = saved ? JSON.parse(saved) : {};
        return this._make(key, data);
    },

    create(key) {
        const data = {};
        localStorage.setItem(key, JSON.stringify(data));
        return this._make(key, data);
    },

    exists(key) {
        return localStorage.getItem(key) !== null;
    },

};
