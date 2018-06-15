app.service('HomeService', function($http){
    console.log('in HomeService')
    let sv = this;
    sv.projects = { list: []};
    sv.entry = { list: []};


    sv.serviceGetProjects = function(){
        return $http({
            method: 'GET',
            url: '/router/project'
        }).then(function(response){
            console.log('back from project GET with:', response);
            sv.projects=response.data;
            console.log('console log of sv.projects:', sv.projects);
        }).catch(function(error){
            console.log('error with project GET');
        }); //end http
    } //end serviceGetProjects

    sv.serviceGetEntry = function(){
        return $http({
            method: 'GET',
            url:'/router/entry'
        }).then(function(response){
            console.log('back from entry GET with:', response);
            sv.entry=response.data;
            console.log('this is sv.entry:', sv.entry);
        }).catch(function(error){
            console.log('error with entry GET');
        });
    }
})