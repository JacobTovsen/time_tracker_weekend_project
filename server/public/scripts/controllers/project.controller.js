app.controller('ProjectController', function(HomeService){
    let self = this;
    console.log('in ProjectController');
    
    self.runProjectIn = function(){
        let postProjectData = {name: self.projectIn};
        HomeService.postProjectData = postProjectData;
        HomeService.serviceProjectIn()
        .then(function(){
            self.getProjects();
            self.projectIn = '';
        });
    } // end runProjectIn
    
    self.getProjects = function(){
        HomeService.serviceGetProjects()
        .then(function(){
            self.projects = HomeService.projects;
            console.log('log of self.projects in controller:', self.projects);
        });    
    } // end getProjects

    self.deleteProject = function(id){
        HomeService.serviceDeleteProject(id)
        .then(function(){
            self.getProjects();
        });
    } // end deleteProjects

    self.getProjects();
});