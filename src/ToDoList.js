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
        if (e.keyCode === ENTER_KEY) {
            let newTask = new Task(e.target.value),
                tasks = j.parse(ls.getItem(this.key));

            tasks.push(newTask);
            ls.setItem(this.key, j.stringify(tasks));
            e.target.value = null;
            this.renderTask(newTask);
        }
    }

    editTask(e) {

    }

    removeTask(e) {

    }

    renderTask(task) {
        let templateTask = `
            <li class='List-item' ${task.isComplete ? 'complete': ''}>
                <input class='List-checkbox' type='checkbox' id="${task.id}" ${task.isComplete ? 'checked': ''}>
                <label class="List-label" data-id="${task.id}" contenteditable spellcheck>${task.name}</label>
                <a class="List-removelink" data-id="${task.id}" href="#">🗑️</a>
            </li>
        `;

        list.insertAdjacentHTML('beforeend', templateTask)
    }

    render() {

        let tasks = j.parse(ls.getItem(this.key)),
            listTasks = list.children;

        tasks.forEach(task => this.renderTask(task));

        task.addEventListener('keyup', this.addTask);
        list.addEventListener('keyup', this.editTask);
        list.addEventListener('keyup', this.removeTask);
    }

}