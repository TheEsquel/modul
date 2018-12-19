// angular 1.5
import * as angular from 'angular'
import list from './components/companylist'

controllerC.$inject = ['']
function controllerC (){
    const test = 'Test message from controller C';
    console.log(test);
    
    }
angular
    .module('app', [])
    .component('component', {
        templateUrl: './list.html',
        // controller: ['controllerC', controllerC()]
    })
    .controller('controllerG', function(){
        this.test = 'Scope test message'
        
    })



// const test = 'test message!';
// console.log(test);





