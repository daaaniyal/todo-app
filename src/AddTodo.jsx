import React, { Component } from "react";

export class AddTodo extends Component {
    state = {
        content: "",
    };

    handleChange = (e) => {
        this.setState({
            content: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: "",
        });
    };

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="task">Add new todo:</label>
                    <input
                        autoFocus
                        type="text"
                        id="task"
                        value={this.state.content}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}

export default AddTodo;
