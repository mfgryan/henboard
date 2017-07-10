const model = "projects";
const INIT_PROJECTS = "INIT_PROJECTS";
function initProjects(projects){
    return {
        type: INIT_PROJECTS, 
        model: model,
        skip: true,
        projects: projects  
    }
}
const SET_CURRENT_PROJECT = "SET_CURRENT_PROJECT";
function setCurrentProject(project){
    return {
        type: SET_CURRENT_PROJECT,
        model: model,
        project: project
    }
}

export { INIT_PROJECTS, SET_CURRENT_PROJECT, initProjects, setCurrentProject }
