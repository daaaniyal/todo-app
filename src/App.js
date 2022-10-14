import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

export class App extends Component {
    state = {
        todos: [
            { id: 1, content: "Bring apples" },
            { id: 2, content: "Eat launch" },
        ],
    };

    addTodo = (todo) => {
        todo.id = Math.random();
        const newTodos = [...this.state.todos, todo];
        this.setState({
            todos: newTodos,
        });
    };

    deleteTodo = (id) => {
        const newTodos = this.state.todos.filter((todo) => {
            return todo.id !== id;
        });
        this.setState({
            todos: newTodos,
        });
    };

    render() {
        return (
            <div className="app-container">
                <h1 className="app-title">Todo's</h1>

                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddTodo addTodo={this.addTodo} />
            </div>
        );
    }
}

export default App;
