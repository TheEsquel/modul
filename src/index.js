import angular from 'angular'
import list  from './components/list.component'
import show from './components/show.component'
import edit from './components/edit.component'
import service from './components/service'


// '720kb.datepicker'
angular.module('app', [])  
    .component('list', list)
    .component('show', show)
    .component('edit', edit)
    .service('service' ,['$q', service])




