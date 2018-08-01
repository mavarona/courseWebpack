import {
    Task
} from './Task';

const ENTER_KEY = 13,
    c = console.log,
    d = document,
    j = JSON,
    ls = localStorage;

export class ToDoList {
    constructor(key) {
        this.key = key;

        if (!ls.getItem(key)) {
            ls.setItem(key, j.stringify([]));
        }

        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.removeTask = this.removeTask.bind(this);

    }

    addTask(e) {
        if (!e.target.value) {
            alert('Not data entered');
        }
        if (e.target === ENTER_KEY) {

        }
    }

    editTask(e) {

    }

    removeTask(e) {

    }

    renderTask() {

    }

    render() {
        task.addEventListener('keyup', this.addTask);
        list.addEventListener('keyup', this.editTask);
        list.addEventListener('keyup', this.removeTask);
    }

}