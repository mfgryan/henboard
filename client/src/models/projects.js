import axios from "axios";

const projects = {};

projects.fields = ["project", "current"];

projects.primaryKeys = ["project"];

projects.validation = {
    project: {
        empty: false,
        maxLength: 30
    }
};

projects.getCurrentProject = function(state) {
    return state.projects.find(project => project.current === true) || {};
};

export default projects;
