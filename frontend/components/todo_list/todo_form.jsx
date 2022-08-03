import React from "react";
import uniqueId from "./util";

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
    

        this.state = {
            id: uniqueId(),
            title: '',
            body: '',
            done: false
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateDone = this.updateDone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Event Handlers for each attribute of the todo
    updateTitle(e) {
        this.setState({title: e.target.value})
    }

    updateBody(e) {
        this.setState({body: e.target.value})
    }

    updateDone(e) {
        if (e.target.value === "on") {
            this.setState({done: true})
        } else {
            this.setState({done: false})
        }
    }

    handleSubmit(e) {
        //preventing the default action so we don't make any requests to backend
        e.preventDefault();

        this.props.receiveTodo(this.state);

        this.state = {
            id: uniqueId(),
            title: '',
            body: '',
            done: false
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add a ToDo Item</h1>
                <label>Title
                    <input type="text" value={this.state.title} onChange={this.updateTitle}/>
                </label>
                <label>Body
                    <input type="text" value={this.state.body} onChange={this.updateBody} />
                </label>
                <label>Done
                    <input type="checkbox" onChange={this.updateDone} />
                </label>
                <input type="submit" value="Add Todo"/>
            </form>
        )
    }
}

export default TodoForm;