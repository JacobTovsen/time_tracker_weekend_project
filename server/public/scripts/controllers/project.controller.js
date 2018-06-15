app.controller('ProjectController', function(HomeService){
    let self = this;
    console.log('in ProjectController');
    
    this.runProjectIn = function(){
        console.log('in runProjectIn');
    }
    
    this.getProjects = function(){
        HomeService.serviceGetProjects()
        .then(function(){
            self.projects = HomeService.projects;
        });    
    }

    this.getProjects();
    console.log('log of self.projects in controller:', self.projects);
});