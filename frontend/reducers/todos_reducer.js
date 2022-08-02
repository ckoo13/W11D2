import { RECEIVE_TODOS } from "../actions/todo_actions";
import { RECEIVE_TODO } from "../actions/todo_actions";
import { REMOVE_TODO } from "../actions/todo_actions";

//sample state
const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };

const todosReducer = (state = initialState, action) => {
    //shallow freezing so we don't make changes to the first layer
    Object.freeze(state);

    //creating a duplicate so we don't modify the original state directly
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_TODOS:
            //converting the array (action.todos) into an object where the key is the 
            //id of the individual todo and the value is the todo object itself
            let id = 1;
            for (let i = 0; i < action.todos.length; i++) {
                nextState[id] = action.todos[i];
                id++;
            }
            return nextState;
        
        case RECEIVE_TODO:
            // Make a new object setting a single key value pair for action.todo
            // Return a new state object by merging your previous state and your
            // new object
            nextState[action.todo.id] = action.todo;
            return nextState;

        case REMOVE_TODO:
            delete nextState[action.todo.id];
            return nextState;
    
        default:
            return state;
    }
  };
  
  export default todosReducer;