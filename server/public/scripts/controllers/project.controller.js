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


    self.sortTable = function(n) {
        let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("projectTable");
        switching = true;
        dir = "asc"; 
        while (switching) {
            switching = false;
            rows = table.getElementsByTagName("TR");
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
                }}}
            if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++; 
            } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
        }}}}  // end sorting function - thank you w3schools :)










    
    self.getProjects();
});