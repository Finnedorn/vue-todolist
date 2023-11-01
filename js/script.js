const {createApp} = Vue;

const miaApp = createApp({
    data() {
        return {
            toDoList: [
                {
                    id: 1,
                    task: 'chiama la nonna',
                    done: false
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
                },
            ],
            lastId: 5
        }
    },
    methods: {

    }
}).mount('#app');