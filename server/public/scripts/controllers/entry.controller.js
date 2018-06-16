app.controller('EntryController', function(HomeService){
    let self = this;
    console.log('in EntryController');
    self.hoursIn = 0;

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
        console.log('this is titleIn:', self.titleIn)
        self.hoursInput();
        
        let postEntryData = {entry: self.titleIn, project: self.projectIn, date: self.dateIn, hours: self.hoursIn};
        HomeService.postEntryData = postEntryData;
        console.log(postEntryData);
        HomeService.serviceEntryIn()
        .then(function(){
            self.getEntry();
            self.titleIn = '';
            self.projectIn = '';
            self.dateIn = '';
            // self.hoursIn = '';
        });
    }

    self.hoursInput = function(){
        let inHours = 60 * (self.startIn.getHours());
        let outHours = 60 * (self.endIn.getHours());
        let inMinutes = self.startIn.getMinutes();
        let outMinutes = self.endIn.getMinutes();

        let timeIn = inHours + inMinutes;
        let timeOut = outHours + outMinutes;

        let totalTime = ((timeOut - timeIn) / 60).toFixed(2);

        console.log(inHours);
        console.log(outHours);
        console.log(inMinutes);
        console.log(outMinutes);
        console.log('Total time:', totalTime , 'hours');
        self.hoursIn = totalTime;
    };

    self.getEntry();
    self.getProject();
});