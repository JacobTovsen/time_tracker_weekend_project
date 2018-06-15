app.controller('ProjectController', function(HomeService){
    let self = this;
    console.log('in ProjectController');

    this.runProjectIn = function(){
        console.log('in runProjectIn');
    }

    self.projectArray = [
        {project: 'Homework', totalHours: 2.5},
        {project: 'Garage Build', totalHours: 6},
        {project: 'Weekend Project', totalHours: 4}
    ];
});