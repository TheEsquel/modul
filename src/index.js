import angular from 'angular'
import listController from './components/listController'
import showController from './components/showController'
import service from './components/service'

angular.module('app', [])  
    .component('list', {
        controller: ["service", listController],
        controllerAs: 'list',
        template: 
        `
        <div>
            <h3> Company's  list: </h3>
            <div ng-repeat='item in list.list track by $index'>
            <a href="#" > {{ item.name }} id: {{ item.id }} </a>
            </div>
        </div>
        `
    })
    .component('show', {
        controller: [showController],
        controllerAs : 'show',
        template: 
        `
        <div> A company card </div>
        `
    })
    .component('edit',{
        
    })
    .service('service' ,['$q', service])




