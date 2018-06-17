app.controller('ReportController', function(HomeService){
    let self = this;
    console.log('in ReportController');
    self.projects = 0;
    
    self.getProjects = function(){
        HomeService.serviceGetProjects()
        .then(function(){
            self.projects = HomeService.projects;
            console.log('log of self.projects in project controller:', self.projects);
            self.pushProjects();

            var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: self.projectArray,
            datasets: [{
                label: 'Hours in Project',
                data: self.totalHoursArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    }); // end canvas view




        });    
    } // end getProjects

    self.getProjects();
    self.projectArray = [];
    self.totalHoursArray = [];

    self.pushProjects = function(){
        // for(let i in self.projects){
        //     self.projectArray.push("Project: " + project[project].name);
        // }
        for(var i in self.projects) {
            self.projectArray.push('Project ' + self.projects[i].name);
            self.totalHoursArray.push(parseInt(self.projects[i].sum));
        }
        console.log('projects in self.projectArray:', self.projectArray);
        console.log('totals in self.totalHoursArray:', self.totalHoursArray);
    } // end pushProjects
});