app.controller('EntryController', function(HomeService){
    let self = this;
    console.log('in EntryController');
    
    self.getProject = function(){
        HomeService.serviceGetProjects()
        .then(function(){
            self.projects=HomeService.projects;
        });
    }
    
    self.getEntry = function(){
        HomeService.serviceGetEntry()
        .then(function(){
            self.entry=HomeService.entry;
        });
    }

    self.deleteEntry = function(id){
        HomeService.serviceDeleteEntry(id)
        .then(function(){
            self.getEntry();
        });
    }

    self.entryIn = function(){
        console.log('time in = ', self.startIn);
        console.log('time out = ', self.endIn);
        
        
        let postEntryData = {entry: self.titleIn, project: self.projectIn, date: self.dateIn, hours: self.hoursIn};
        HomeService.postEntryData = postEntryData;
        console.log(postEntryData);
        HomeService.serviceEntryIn()
        .then(function(){
            self.getEntry();
            self.titleIn = '';
            self.projectIn = '';
            self.dateIn = '';
            self.hoursIn = '';
        });
    }

    self.getEntry();
    self.getProject();
});