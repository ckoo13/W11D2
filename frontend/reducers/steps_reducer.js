import { RECEIVE_STEPS } from "../actions/step_actions";
import { RECEIVE_STEP } from "../actions/step_actions";
import { REMOVE_STEP } from "../actions/step_actions";

const initialState = {
    1: { // this is the step with id = 1
        id: 1,
        title: 'walk to store',
        done: false,
        todo_id: 1
    },
    2: { // this is the step with id = 2
        id: 2,
        title: 'buy soap',
        done: false,
        todo_id: 1
    }
};

const stepsReducer = (state = initialState, action) => {
    Object.freeze(state);

    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_STEPS:
            let id = 1;
            for (let i = 0; i < action.steps.length; i++) {
                nextState[id] = action.steps[i];
                id++;
            }

            return nextState;

        case RECEIVE_STEP:
            nextState[action.step.id] = action.step;
            return nextState;

        case REMOVE_STEP:
            delete nextState[action.step.id];
            return nextState;

        default:
            return state;
    }
};

export default stepsReducer;