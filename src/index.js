// angular 1.5
import * as angular from 'angular'
import axios from 'axios'

function listController (){
    this.template = "";
    var companies = [];

    axios.get("./company.list.json")
        .then((response) => {                   
            this.companies = response.data.companies;
            console.log(this);
            for(company in companies){
                console.log(name);
                
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
function editController(){

}    
angular
    .module('modulApp', [])
    .component('list', {
        template: "<div ng-repeat = 'company in companies'>{{company}}</div>",
        controller: listController
    })
    .component('card', {
        template: "View",
        controller: function(){
            console.log('view the company');            
        }
    })
    .component('edit', {
        controller: editController
    })
