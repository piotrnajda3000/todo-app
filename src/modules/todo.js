import { projects } from "./project";

function Todo(title, dueDate) {

    let complete = false; 

    const proto = {
        setProp(prop, value){
            delete projects.storage[this.project].todos[this.title]
            this[prop] = value;
            if (prop == 'title') {
                projects.storage[this.project].todos[value] = this;
            } 
            else {
                projects.storage[this.project].todos[this.title] = this; 
            }
        }
    }

    let todoObj = Object.assign(Object.create(proto), { title, dueDate, complete });

    return todoObj; 
}

export { Todo }