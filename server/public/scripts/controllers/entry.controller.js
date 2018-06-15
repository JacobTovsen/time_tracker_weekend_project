app.controller('EntryController', function(HomeService){
    let self = this;
    console.log('in EntryController');
    
    self.entryIn = function(){
        console.log('in entryIn');
    }
    
    self.entryArray = [
        {entry: 'Populated Database', project: 'Weekend Project', date:'6/15/18', hours: 2},
        {entry: 'Electrical Work', project: 'Garage Build', date:'6/15/18', hours: 10},
        {entry: 'Painted the basement', project: 'Honey-do List', date:'4/5/18', hours: 4}
    ]
    
    
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

    self.getEntry();
});