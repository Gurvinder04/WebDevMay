 //converting objectoriented.js into classes
class ToDoApplication{
    constructor(){
        this.todos =[];
    }

    //addTodo - adding
    addTodo(todo){
        return this.todos.push(todo);
    }

    //getTodo - get all todos
    getTodo(){
        return this.todos;
    }
    //getTodoByid - single todo
    getTodoByValue(todo){
         let single_todo = this.todos.filter(val => val.toLowerCase() ==todo.toLowerCase().trim())
         console.log(single_todo);
    }
    //deleteTodoById - delete todo
    deleteTodoByValue(todo){
        let index = this.todos.indexOf(todo);
        console.log(this.todos[index])
        this.todos.splice(index,1)
    }
    //toString - display the Todo
    toString(){
        this.todos.forEach((todo,index)=>{
            console.log(`#${index} Task: ${todo}`)
        });
    }
}

let app =  new ToDoApplication();
app.addTodo("Go to the store");
app.addTodo("Finish my homework");
app.addTodo("Bye Bye")
//console.log(app.getTodo());
app.toString();
app.getTodoByValue("      finish my homework");
app.deleteTodoByValue("Finish my homework");

app.toString();