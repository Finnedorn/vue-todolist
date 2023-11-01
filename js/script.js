const {createApp} = Vue;

const miaApp = createApp({
    data() {
        return {
            toDoList: [
                {
                    id: 1,
                    task: 'riordina la stanza in ordine alfabetico',
                    done: false,
                },
                {
                    id: 2,
                    task: 'chiama la nonna ma non dire niente',
                    done: false
                },
                {
                    id: 3,
                    task: 'vesti il cane da pirata',
                    done: false
                },
                {
                    id: 4,
                    task: 'apri il frigo e lascialo li',
                    done: false
                },
                {
                    id: 5,
                    task: 'prendi un sasso e chiamalo Franco',
                    done: false
                }
            ],
            lastId: 5,
            newTask: '',

        }
    },
    methods: {
        removeFromList(el) {
            this.toDoList.splice(el, 1)
        },
        taskAdder() {
            this.lastId++;
            const addingTask = {
                id: this.lastId,
                task: this.newTask,
                done:false
            };
            this.toDoList.unshift(addingTask);
            this.newTask= '';
        },
        doneMarker(el) {
            this.toDoList[el].done = !this.toDoList[el].done
        }
        

    }
}).mount('#app');