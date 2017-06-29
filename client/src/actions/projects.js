const INIT_PROJECTS = "INIT_PROJECTS";
function initProjects(projects){
    return {
        type: INIT_PROJECTS, 
        projects: projects  
    }
}
const SET_CURRENT_PROJECT = "SET_CURRENT_PROJECT";
function setCurrentProject(project){
    return {
        type: SET_CURRENT_PROJECT,
        project: project
    }
}

export { INIT_PROJECTS, SET_CURRENT_PROJECT, initProjects, setCurrentProject }
