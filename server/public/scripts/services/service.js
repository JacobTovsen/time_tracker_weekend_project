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
        }).catch(function(error){
            console.log('error with entry GET');
        }); //end http
    } // end serviceGetEntry

    sv.serviceDeleteEntry = function(id){
        return $http({
            method: 'DELETE',
            url:`/router/entry/${id}`
        }).then(function(response){
            console.log('back from entry DELETE', response);
        }).catch(function(error){
            console.log('Error with entry DELETE', error);
        }); // end http
    } // end serviceDeleteEntry

    sv.serviceEntryIn = function(){
        console.log('in service postCall function:', sv.postEntryData);
        return $http({
            method: 'POST',
            url:'/router/entry',
            data: sv.postEntryData
        }).then(function(response){
            console.log('back from entry POST with:', response);
        }).catch(function(error){
            console.log('Error in POST:', error);
        }); //end http
    } // end serviceEntryIn

})