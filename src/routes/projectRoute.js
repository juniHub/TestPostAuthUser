import { addNewProject, 
    getProjects, 
    getProjectWithID, 
    updateProject, 
    deleteProject } from '../controllers/projectController.js';

import { login, register, loginRequired } from '../controllers/authController.js'

const routes = (app) => {
    app.route('/api/v1/projects')

    //GET projects
    .get( loginRequired, getProjects)
    
    // POST a project
    .post(loginRequired, addNewProject);

    app.route('/api/v1/project:projectId')

    // GET a specific project
    .get(loginRequired, getProjectWithID)
    
    // PUT update a project
    .put(loginRequired, updateProject)

    // DELETE a project
    .delete(loginRequired, deleteProject);

    // registration route
    app.route('/api/v1/auth/register')
        .post(register);

    // login route
    app.route('/api/v1/auth/login')
        .post(login);
}

export default routes;
