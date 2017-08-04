//action types
import {
    SET_CURRENT_PROJECT,
    INIT_PROJECTS
} from "../actions/projects";

export const initialState = [{ project: "henboard", current: true }];

function projects(state = initialState, action) {
    switch (action.type) {
        case INIT_PROJECTS:
            return action.projects;
        case SET_CURRENT_PROJECT:
            return state.map(project => {
                return project.project === action.project
                    ? Object.assign({}, project, { current: true })
                    : Object.assign({}, project, { current: false });
            });
        default:
            return state;
    }
}

export default projects;
