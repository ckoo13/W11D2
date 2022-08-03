import { connect } from "react-redux";
import TodoList from "./todo_list";
import allTodos from "../../reducers/selectors";
import { receiveTodos, receiveTodo, removeTodo } from '../../actions/todo_actions';


const mapStateToProps = (state) => {
    return (
        {
            todos: allTodos(state)
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            receiveTodo: (todo) => dispatch(receiveTodo())
        }
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList);