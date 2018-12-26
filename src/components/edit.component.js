class editController{
  constructor(service){
    this.service = service;
    this.name  = 'test';
    this.id = '';
}
    $onInit(){
    }
    $onChange(item){

    }
}
export default  {
    controller: ["service", editController],
    controllerAs: 'edit',
    template: 
    `
    <div ng-show = 'edit.service.editIsShown'>
      <h3> Редактировать: </h3>
      <form>
         <label>Название : </label> <input type='text' ng-model = 'edit.service.newCompany.name'></br>
         <label>ОГРН : </label> <input type='text' > </br>
         <label>Тип компании: </label>
            <select>
              <option value='ООО'> ООО
              <option value='ЗАО'> ЗАО
              <option value='ИП'> ИП
            </select>  </br>
        <label>Дата регистрации: </label>  <datepicker>
<input ng-model="date" type="text"/>
</datepicker>
</br>
        <label>Активна: </label><input type='checkbox' > </br>
        <button type="button" class="btn btn-primary" ng-click ='edit.service.saveCompany()'>Сохранить</button>
      </form>
    </div> 
    `
}