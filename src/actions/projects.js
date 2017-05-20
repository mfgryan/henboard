const SET_CURRENT_PROJECT = "SET_CURRENT_PROJECT";
function setCurrentProject(project){
    return {
        type: SET_CURRENT_PROJECT, 
        project: project.project
    }
}

export { SET_CURRENT_PROJECT, setCurrentProject }
