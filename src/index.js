import angular from 'angular'
import listController from './components/listController'
import showController from './components/showController'
import editController from './components/editController'
import service from './components/service'


angular.module('app', [])  
    .component('list', {
        controller: ["service", listController],
        controllerAs: 'listComponent',
        template: 
        `
        <div>
          <h3> Список компаний: </h3>
          <div ng-repeat='item in listComponent.list track by $index'>
            <a href="#" ng-click = 'listComponent.service.showCompany(item)'> {{ item.name }} id: {{ item.id }} </a>
          </div>
        </div>
        `
    })
    .component('show', {
        controller: ["service" ,showController],
        controllerAs : 'show',
        template: 
        `
        <div ng-show = 'show.service.cardIsShown' > 
          <h3 >Карта компании</h3>
          <div class= 'inner-show'> 
            ID: <span class = 'value' >{{ show.service.company.id }}  </span> <br/>
            Название: <span class = 'value' > {{ show.service.company.name }}  </span>  <br/>
            ОГРН  :  <span class = 'value' > {{ show.service.company.prn }}    </span>  <br/>
            Тип:  <span class = 'value' > {{ show.service.company.type }}   </span>   <br/>
            Дата регистрации :  <span class = 'value' > {{ show.service.company.date }}    </span>  <br/>
            Активна :  <span  class ='value'ng-if = 'show.service.company.isactive'> Да </span> <br/>
            <button class='btn btn-default' ng-click = 'show.service.editCompany(item)'> Редактировать </button> 
          </div>
        </div>
        `
    })
    .component('edit',{
        controller: ["service", editController],
        controllerAs: 'edit',
        template: 
        `
        <div ng-show = 'edit.service.editIsShown'>
          <h3> Редактировать: </h3>
          <form>
             <label>Название : </label> <input type='text' ></br>
             <label>ОГРН : </label> <input type='text' > </br>
             <label>Тип компании: </label>
                <select>
                  <option value='ООО'> ООО
                  <option value='ЗАО'> ЗАО
                  <option value='ИП'> ИП
                </select>  </br>
            <label>Дата регистрации: </label>
  </br>
            <label>Активна: </label><input type='checkbox' > </br>
          </form>
        </div> 
        `
    })
    .service('service' ,['$q', service])




