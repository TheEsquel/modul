import angular from 'angular'
import list  from './components/list.component'
import show from './components/show.component'
import edit from './components/edit.component'
import service from './components/service'
import datepicker from './components/angular-datepicker'

angular.module('app', ['720kb.datepicker'])  
    .component('list', list)
    .component('show', show)
    .component('edit', edit)
    .service('service' ,['$q', service])