app.controller('ProjectController', function(HomeService){
    let self = this;
    console.log('in ProjectController');
    
    
    self.projectArray = [
        {project: 'Homework', totalHours: 2.5},
        {project: 'Garage Build', totalHours: 6},
        {project: 'Weekend Project', totalHours: 4}
    ];
    
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