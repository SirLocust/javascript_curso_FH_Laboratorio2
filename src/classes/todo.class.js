export class Todo{
    static createInstanceOfJson({task,id,completed,created}){
        const todoTemp = new Todo(task);
        todoTemp.id = id;
        todoTemp.completed = completed;
        todoTemp.created = created;
        return todoTemp
    }
    constructor(task){

        this.task = task;
        this.id  = new Date().getTime();
        this.completed = false;
        this.created = new Date();
    }
    
}