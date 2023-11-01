const {createApp} = Vue;

const miaApp = createApp({
    data() {
        return {
            toDoList: [
                {
                    id: 1,
                    task: 'riordina la stanza',
                    done: false,
                    boh: 'boh'
                },
                {
                    id: 2,
                    task: 'chiama la nonna',
                    done: false
                },
                {
                    id: 3,
                    task: 'chiama la nonna',
                    done: false
                },
                {
                    id: 4,
                    task: 'chiama la nonna',
                    done: false
                },
                {
                    id: 5,
                    task: 'chiama la nonna',
                    done: false
                }
            ],
            lastId: 5
        }
    },
    methods: {
        removeFromList(el) {
            this.toDoList.splice(el, 1)
        }

    }
}).mount('#app');