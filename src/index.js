import angular from 'angular'
import listController from './components/companylist';
import axios from 'axios';

angular.module('app', []).controller('listController', listController
    // [function($scope){
    //     var self = this;
    //     self.message = "No scope is needed";
    //     self.companies = '.'
    //     axios.get("./company.list.json")
    //         .then((response) => {                   
    //             self.companies = response.data.companies;
    //             console.log(self.companies);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    //         .then(function(){})
    //     console.log(self.companies);            
    // }]
    )
    .component('list', {
        template: "",
        controller: function(){}
    })
