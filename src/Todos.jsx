import React from "react";

const Todos = ({ todos, deleteTodo }) => {
    const todoItems = todos.length ? (
        todos.map((todo) => {
            return (
                <div
                    className="todo-item"
                    key={todo.id}
                    onClick={() => deleteTodo(todo.id)}
                >
                    <span className="todo-item-content">{todo.content}</span>
                </div>
            );
        })
    ) : (
        <p className="msg">You have no todo's left.</p>
    );

    return <div className="todos-container">{todoItems}</div>;
};

export default Todos;
